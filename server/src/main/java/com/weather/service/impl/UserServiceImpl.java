package com.weather.service.impl;

import com.weather.exception.UserAlreadyExistsException;
import com.weather.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.weather.dto.UserDto;
import com.weather.entity.UserEntity;
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
        return users.stream().map(this::mapToUserDto).collect(Collectors.toList());
    }

    @Override
    public UserEntity registration(UserEntity user) throws UserAlreadyExistsException {
        if(userRepository.findByUserLogin(user.getUserLogin()) != null) {
            throw new UserAlreadyExistsException("User with such login already exists!");
        }
        return userRepository.save(user);
    }

    private UserDto mapToUserDto(UserEntity userEntity) {
        UserDto userDto = UserDto.builder()
                .userId(userEntity.getUserId())
                .userLogin(userEntity.getUserLogin())
                .userEmail(userEntity.getUserEmail())
                .createdAt(userEntity.getCreatedAt())
                .lastUpdateAt(userEntity.getLastUpdateAt())
                .weatherReportsByUser(userEntity.getWeatherReportsByUser())
                .build();

        return userDto;
    }
}
