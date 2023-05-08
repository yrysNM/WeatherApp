package com.weather.service;

import com.weather.dto.WeatherReportDto;
import com.weather.entity.WeatherReportEntity;
import com.weather.exception.NotFoundException;

import java.util.List;

public interface WeatherReportService {
    List<WeatherReportDto> findAllReports();

    WeatherReportDto createReport(WeatherReportEntity weatherReportEntity, Integer userId) throws NotFoundException;

    WeatherReportDto updateReportData(Long reportId, Integer temperature, String description) throws NotFoundException;

    List<WeatherReportDto> getReportsFromUser(Integer userId) throws NotFoundException;
}
