package com.weather.service;

import com.weather.dto.UserDto;
import com.weather.entity.UserEntity;
import com.weather.exception.UserAlreadyExistsException;

import java.util.List;

public interface UserService {
    List<UserDto> findAllUsers();
    UserEntity registration(UserEntity userEntity) throws UserAlreadyExistsException;
}
