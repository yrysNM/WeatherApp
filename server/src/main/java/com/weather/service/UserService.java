package com.weather.service;

import com.weather.dto.UserDto;
import com.weather.entity.UserEntity;
import com.weather.exception.UserAlreadyExistsException;
import com.weather.exception.NotFoundException;

import java.util.List;

public interface UserService {
    List<UserDto> findAllUsers();

    UserDto registration(UserEntity userEntity) throws UserAlreadyExistsException;

    UserDto getUser(Integer userId) throws NotFoundException;

    Integer deleteUser(Integer userId);
}
