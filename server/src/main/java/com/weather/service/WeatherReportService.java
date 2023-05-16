package com.weather.service;

import com.weather.dto.WeatherReportDto;
import com.weather.entity.WeatherReportEntity;
import com.weather.exception.NotFoundException;

import java.util.List;

public interface WeatherReportService {

    WeatherReportDto createReport(WeatherReportDto weatherReport, Integer userId) throws NotFoundException;

    WeatherReportDto updateReportData(Long reportId, WeatherReportDto weatherReport) throws NotFoundException;

    List<WeatherReportDto> getReportsFromUser(Integer userId, Integer hour) throws NotFoundException;

    List<WeatherReportDto> getAllReports(Integer hour);
}
