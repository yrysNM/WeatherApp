package com.weather.service;


import com.weather.dto.WeatherReportDto;
import com.weather.entity.WeatherReportEntity;

import java.util.List;

public interface WeatherReportService {
    List<WeatherReportDto> findAllReports();
    WeatherReportDto createReport(WeatherReportEntity weatherReportEntity, Integer userId);
    WeatherReportDto updateReportData(Long reportId, Integer temperature, String description);

}
