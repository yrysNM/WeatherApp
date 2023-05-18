package com.weather.service.impl;

import java.io.IOException;
import java.util.Optional;

// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.weather.config.JwtService;
import com.weather.dto.AuthenticationRequestDto;
import com.weather.dto.AuthenticationResponseDto;
import com.weather.dto.RegisterRequestDto;
import com.weather.entity.TokenEntity;
import com.weather.entity.UserEntity;
import com.weather.entity.roles.RoleToken;
import com.weather.entity.roles.RoleUser;
import com.weather.exception.NotFoundException;
import com.weather.exception.UserAlreadyExistsException;
import com.weather.repository.TokenRepository;
import com.weather.repository.UserRepository;
import com.weather.service.AuthenticationService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

  // @Autowired
  private final UserRepository userRepository;
  private final TokenRepository tokenRepository;
  private final PasswordEncoder passwordEncoder;
  private final JwtService jwtService;
  private final AuthenticationManager authenticationManager;

  @Override
  public AuthenticationResponseDto register(RegisterRequestDto requestBody) throws UserAlreadyExistsException {
    Optional<UserEntity> userC = userRepository.findByUserEmail(requestBody.getEmail());

    if (!userC.isEmpty()) {
      throw new UserAlreadyExistsException(
          "user with such email already exists!");
    } else {
      UserEntity user = UserEntity.builder()
          .userLogin(requestBody.getUsername())
          .userEmail(requestBody.getEmail())
          .userPassword(passwordEncoder.encode(requestBody.getPassword()))
          .role(RoleUser.USER)
          .build();
      var savedUser = userRepository.save(user);

      var jwtToken = jwtService.generateToken(user);
      var refreshToken = jwtService.generateRefreshToken(user);
      saveUserToken(savedUser, jwtToken);
      return AuthenticationResponseDto
          .builder()
          .accessToken(jwtToken)
          .refreshToken(refreshToken)
          .build();
    }
  }

  @Override
  public AuthenticationResponseDto authenticate(AuthenticationRequestDto requestBody) {
    // authenticationManager.authenticate(
    // new UsernamePasswordAuthenticationToken(requestBody.getEmail(),
    // requestBody.getPassword()));

    // var user =
    // userRepository.findByUserEmail(requestBody.getEmail()).orElseThrow();

    // // if (user == null) {
    // // // throw new NotFoundException("User not found!");
    // // return null;
    // // }

    // var jwtToken = jwtService.generateToken(user);
    // var refreshToken = jwtService.generateRefreshToken(user);
    // revokeAllUserTokens(user);
    // saveUserToken(user, jwtToken);

    // return AuthenticationResponseDto
    // .builder()
    // .accessToken(jwtToken)
    // .refreshToken(refreshToken)
    // .build();

    authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(
            requestBody.getEmail(),
            requestBody.getPassword()));
    var user = userRepository.findByUserEmail(requestBody.getEmail())
        .orElseThrow();

    if (user == null) {
      return null;
    }

    var jwtToken = jwtService.generateToken(user);
    var refreshToken = jwtService.generateRefreshToken(user);
    revokeAllUserTokens(user);
    saveUserToken(user, jwtToken);
    return AuthenticationResponseDto.builder()
        .accessToken(jwtToken)
        .refreshToken(refreshToken)
        .build();
  }

  @Override
  public void saveUserToken(UserEntity user, String jwtToken) {
    var token = TokenEntity.builder()
        .user(user)
        .token(jwtToken)
        .tokenType(RoleToken.BEARER)
        .expired(false)
        .revoked(false)
        .build();
    tokenRepository.save(token);
  }

  private void revokeAllUserTokens(UserEntity user) {
    var validUserTokens = tokenRepository.findAllValidTokenByUser(user.getUserId());
    if (validUserTokens.isEmpty())
      return;
    validUserTokens.forEach(token -> {
      token.setExpired(true);
      token.setRevoked(true);
    });
    tokenRepository.saveAll(validUserTokens);
  }

  @Override
  public void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException {
    final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
    final String refreshToken;
    final String userEmail;
    if (authHeader == null || !authHeader.startsWith("Bearer ")) {
      return;
    }
    refreshToken = authHeader.substring(7);
    userEmail = jwtService.extractUsername(refreshToken);
    if (userEmail != null) {
      var user = this.userRepository.findByUserEmail(userEmail)
          .orElseThrow();
      if (jwtService.isTokenValid(refreshToken, user)) {
        var accessToken = jwtService.generateToken(user);
        revokeAllUserTokens(user);
        saveUserToken(user, accessToken);
        var authResponse = AuthenticationResponseDto.builder()
            .accessToken(accessToken)
            .refreshToken(refreshToken)
            .build();
        new ObjectMapper().writeValue(response.getOutputStream(), authResponse);
      }
    }
  }

}
