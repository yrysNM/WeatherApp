package com.weather.service;

import com.weather.dto.AuthenticationRequestDto;
import com.weather.dto.AuthenticationResponseDto;
import com.weather.dto.RegisterRequestDto;
import com.weather.entity.UserEntity;

import com.weather.exception.NotFoundException;
import com.weather.exception.UserAlreadyExistsException;

import java.io.IOException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public interface AuthenticationService {
  AuthenticationResponseDto register(RegisterRequestDto requestBody);

  void saveUserToken(UserEntity user, String jwtToken);

  AuthenticationResponseDto authenticate(AuthenticationRequestDto requestBody) throws NotFoundException;

  void refreshToken(HttpServletRequest request,
      HttpServletResponse response) throws IOException;
}
