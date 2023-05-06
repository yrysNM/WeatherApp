package com.weather.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.weather.entity.WeatherReportEntity;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    private int userId;
    private String userLogin;
    private String userEmail;
    private LocalDateTime createdAt;
    private LocalDateTime lastUpdateAt;
    private List<WeatherReportDto> weatherReportsByUser;
}
