package com.weather.service.impl;

import com.weather.dto.WeatherReportDto;
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
        return users.stream().map(UserServiceImpl::mapToUserDto).collect(Collectors.toList());
    }

    @Override
    public UserDto registration(UserEntity user) throws UserAlreadyExistsException {
        if(userRepository.findByUserLogin(user.getUserLogin()) != null) {
            throw new UserAlreadyExistsException("User with such login already exists!");
        }
        return mapToUserDto(userRepository.save(user));
    }

    @Override
    public UserDto getUser(Integer userId){
        UserEntity userEntity = userRepository.getReferenceById(userId);
        return mapToUserDto(userEntity);
    }

    @Override
    public Integer deleteUser(Integer userId) {
        userRepository.deleteById(userId);
        return userId;
    }

    public static UserDto mapToUserDto(UserEntity userEntity) {
        return UserDto.builder()
                .userId(userEntity.getUserId())
                .userLogin(userEntity.getUserLogin())
                .userEmail(userEntity.getUserEmail())
                .createdAt(userEntity.getCreatedAt())
                .lastUpdateAt(userEntity.getLastUpdateAt())
                .weatherReportsByUser(userEntity.getWeatherReportsByUser()
                        .stream().map(WeatherReportServiceImpl::mapToWeatherReportDto)
                        .collect(Collectors.toList()))
                .build();
    }
}
