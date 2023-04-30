package com.weather.service.impl;

import com.weather.service.WeatherReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.weather.dto.WeatherReportDto;
import com.weather.entity.WeatherReportEntity;
import com.weather.repository.WeatherReportRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class WeatherReportServiceImpl implements WeatherReportService {
    private WeatherReportRepository weatherReportRepository;

    @Autowired
    public WeatherReportServiceImpl(WeatherReportRepository weatherReportRepository) {
        this.weatherReportRepository = weatherReportRepository;
    }

    @Override
    public List<WeatherReportDto> findAllReports() {
        List<WeatherReportEntity> reports = weatherReportRepository.findAll();
        return reports.stream().map(this::mapToWeatherReportDto).collect(Collectors.toList());
    }

    private WeatherReportDto mapToWeatherReportDto(WeatherReportEntity reportEntity) {
        WeatherReportDto weatherReportDto = WeatherReportDto.builder()
                .reportId(reportEntity.getReportId())
                .city(reportEntity.getCity())
                .weatherDescription(reportEntity.getWeatherDescription())
                .createdAt(reportEntity.getCreatedAt())
                .user(reportEntity.getUser())
                .build();

        return weatherReportDto;
    }

}
