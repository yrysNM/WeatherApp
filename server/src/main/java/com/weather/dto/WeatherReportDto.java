package com.weather.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class WeatherReportDto {
    private long reportId;
    private String city;
    private Integer temperature;
    private String weatherDescription;
    private LocalDateTime createdAt;
    private String userName;
}
