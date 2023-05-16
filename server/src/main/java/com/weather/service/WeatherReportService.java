package com.weather.service;

import com.weather.dto.WeatherReportDto;
import com.weather.exception.NotFoundException;


import java.util.List;

public interface WeatherReportService {

    WeatherReportDto createReport(WeatherReportDto weatherReport, Integer userId) throws NotFoundException;

    WeatherReportDto updateReportData(Long reportId, WeatherReportDto weatherReport) throws NotFoundException;

    List<WeatherReportDto> getReportsFromUser(Integer userId, Integer hour) throws NotFoundException;

    List<WeatherReportDto> getAllReports(Integer userId, Integer hour);

    Long deleteReport(Long reportId);

    Integer rankUp(Long reportId, Integer userId);
    Integer rankDown(Long reportId, Integer userId);
}
