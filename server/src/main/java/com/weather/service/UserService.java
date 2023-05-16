package com.weather.service;

import com.weather.dto.UserDto;
import com.weather.entity.UserEntity;
import com.weather.exception.UserAlreadyExistsException;
import com.weather.exception.NotFoundException;

import java.util.List;

public interface UserService {
    List<UserDto> findAllUsers();

    UserDto registration(UserEntity userEntity) throws UserAlreadyExistsException;

    UserDto getUser(String userEmail) throws NotFoundException;

    String updateUser(String userLogin, String userEmail, String confirmPassword, Integer userId)
            throws NotFoundException;

    Integer deleteUser(Integer userId);
}
