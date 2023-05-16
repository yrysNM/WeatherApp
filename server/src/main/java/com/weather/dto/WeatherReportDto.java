package com.weather.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
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
    @NotNull(message = "city name shoudn't be null")
    @NotBlank(message = "city is mandatory")
    private String city;
    @Min(0)
    @Max(335)
    private Integer temperature;
    private String title;
    private String icon;
    @NotNull(message = "description must not be empty")
    @NotBlank(message = "description is mandatory")
    private String weatherDescription;
    private LocalDateTime createdAt;
    private LocalDateTime lastUpdateAt;
    private String userName;
}
