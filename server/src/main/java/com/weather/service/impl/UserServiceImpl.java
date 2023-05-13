package com.weather.service.impl;

// import com.weather.dto.WeatherReportDto;
// import com.weather.exception.UserAlreadyExistsException;
import com.weather.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.weather.dto.UserDto;
import com.weather.entity.UserEntity;
import com.weather.exception.UserAlreadyExistsException;
import com.weather.exception.NotFoundException;
import com.weather.repository.UserRepository;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
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
        if (userRepository.findByUserLogin(user.getUserLogin()) != null) {
            throw new UserAlreadyExistsException("User with such login already exists!");
        } else {

            return mapToUserDto(userRepository.save(user));
        }
    }

    @Override
    public UserDto getUser(Integer userId) throws NotFoundException {
        UserEntity userEntity = userRepository.findByUserId(userId);
        if (userEntity != null) {
            return mapToUserDto(userEntity);
        } else {
            throw new NotFoundException("User not found! id: " + userId);
        }
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
                .weatherReportsByUser(
                        Optional.ofNullable(userEntity.getWeatherReportsByUser()).orElseGet(Collections::emptyList)
                                .stream().map(WeatherReportServiceImpl::mapToWeatherReportDto)
                                .collect(Collectors.toList()))
                .build();
    }
}
