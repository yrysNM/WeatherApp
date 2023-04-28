package com.weather.service;


import com.weather.dto.WeatherReportDto;

import java.util.List;

public interface WeatherReportService {
    List<WeatherReportDto> findAllReports();
}
