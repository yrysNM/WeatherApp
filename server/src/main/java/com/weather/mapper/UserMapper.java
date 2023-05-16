package com.weather.mapper;

import com.weather.dto.UserDto;
import com.weather.entity.UserEntity;

import java.util.Collections;
import java.util.Optional;
import java.util.stream.Collectors;

public class UserMapper {
    public static UserDto mapToUserDto(UserEntity userEntity) {
        return UserDto.builder()
                .userId(userEntity.getUserId())
                .userLogin(userEntity.getUserLogin())
                .userEmail(userEntity.getUserEmail())
                .createdAt(userEntity.getCreatedAt())
                .lastUpdateAt(userEntity.getLastUpdateAt())
                .weatherReportsByUser(
                        Optional.ofNullable(userEntity.getWeatherReportsByUser())
                                .orElseGet(Collections::emptyList)
                                .stream().map(WeatherReportMapper::mapToWeatherReportDto)
                                .collect(Collectors.toList()))
                .build();
    }

//    public static UserEntity mapToUserEntity(UserDto userDto) {
//        return UserEntity.builder()
//                .userId(userDto.getUserId())
//                .build();
//    }
}
