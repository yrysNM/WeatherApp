package com.weather.service.impl;

import com.weather.mapper.UserMapper;
import com.weather.service.UserService;

import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.weather.dto.UserDto;
import com.weather.entity.UserEntity;
import com.weather.exception.UserAlreadyExistsException;
import com.weather.exception.NotFoundException;
import com.weather.repository.UserRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public List<UserDto> findAllUsers() {
        List<UserEntity> users = userRepository.findAll();
        return users.stream().map(UserMapper::mapToUserDto).collect(Collectors.toList());
    }

    @Override
    public UserDto registration(UserEntity user) throws UserAlreadyExistsException {
        if (userRepository.findByUserLogin(user.getUserLogin()).isPresent()) {
            throw new UserAlreadyExistsException("User with such login already exists!");
        } else {

            return UserMapper.mapToUserDto(userRepository.save(user));
        }
    }

    @Override
    public UserDto getUser(String userEmail) throws NotFoundException {
        UserEntity userEntity = userRepository.findByUserEmail(userEmail).get();
        if (userEntity != null) {
            return UserMapper.mapToUserDto(userEntity);
        } else {
            throw new NotFoundException("User not found!");
        }
    }

    @Override
    public Integer deleteUser(Integer userId) {
        userRepository.deleteById(userId);
        return userId;
    }

    @Override
    public String updateUser(String userLogin, String userEmail, String confirmPassword) throws NotFoundException {
        Optional<UserEntity> user = userRepository.findByUserEmail(userEmail);

        if (user.isEmpty()) {
            throw new NotFoundException("User not found!");
        }

        if (!passwordEncoder.matches(confirmPassword, user.get().getUserPassword())) {
            throw new NotFoundException("Password is not correct!");
        }

        user.get().setUserEmail(userEmail);
        user.get().setUserLogin(userLogin);
        userRepository.save(user.get());

        return "User updated successfully!";
    }

}
