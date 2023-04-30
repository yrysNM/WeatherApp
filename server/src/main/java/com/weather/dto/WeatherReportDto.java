package com.weather.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.weather.entity.UserEntity;

import java.time.LocalDateTime;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class WeatherReportDto {
    private long reportId;
    private String city;
    private int temperature;
    private String weatherDescription;
    private LocalDateTime createdAt;
    private UserEntity user;
}
