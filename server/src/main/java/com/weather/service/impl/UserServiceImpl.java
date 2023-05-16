package com.weather.service.impl;

import com.weather.mapper.UserMapper;
import com.weather.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.weather.dto.UserDto;
import com.weather.entity.UserEntity;
import com.weather.exception.UserAlreadyExistsException;
import com.weather.exception.NotFoundException;
import com.weather.repository.UserRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

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
    public UserDto getUser(Integer userId) throws NotFoundException {
        UserEntity userEntity = userRepository.findByUserId(userId);
        if (userEntity != null) {
            return UserMapper.mapToUserDto(userEntity);
        } else {
            throw new NotFoundException("User not found! id: " + userId);
        }
    }

    @Override
    public Integer deleteUser(Integer userId) {
        userRepository.deleteById(userId);
        return userId;
    }


}
