package com.weather.service.impl;

import com.weather.entity.UserEntity;
import com.weather.repository.UserRepository;
import com.weather.service.WeatherReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.weather.dto.WeatherReportDto;
import com.weather.entity.WeatherReportEntity;
import com.weather.exception.NotFoundException;
import com.weather.repository.WeatherReportRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class WeatherReportServiceImpl implements WeatherReportService {
    private WeatherReportRepository weatherReportRepository;
    private UserRepository userRepository;

    @Autowired
    public WeatherReportServiceImpl(WeatherReportRepository weatherReportRepository,
            UserRepository userRepository) {
        this.weatherReportRepository = weatherReportRepository;
        this.userRepository = userRepository;
    }

    @Override
    public List<WeatherReportDto> findAllReports() {
        List<WeatherReportEntity> reports = weatherReportRepository.findAll();
        return reports.stream().map(WeatherReportServiceImpl::mapToWeatherReportDto).collect(Collectors.toList());
    }

    @Override
    public WeatherReportDto createReport(WeatherReportEntity weatherReportEntity, Integer userId)
            throws NotFoundException {
        UserEntity userEntity = userRepository.findByUserId(userId);

        if (userEntity == null) {
            throw new NotFoundException("User not found!");
        }

        weatherReportEntity.setUser(userEntity);
        return mapToWeatherReportDto(weatherReportRepository.save(weatherReportEntity));
    }

    @Override
    public WeatherReportDto updateReportData(Long reportId, Integer temperature, String description)
            throws NotFoundException {
        WeatherReportEntity weatherReportEntity = weatherReportRepository.findByReportId(reportId);

        if (weatherReportEntity == null) {
            throw new NotFoundException("Report not found! id: " + reportId);
        }

        weatherReportEntity.setTemperature(temperature);
        weatherReportEntity.setWeatherDescription(description);
        return mapToWeatherReportDto(weatherReportRepository.save(weatherReportEntity));
    }

    @Override
    public List<WeatherReportDto> getReportsFromUser(Integer userId) throws NotFoundException {
        UserEntity user = userRepository.findByUserId(userId);

        if (user == null) {
            throw new NotFoundException("Reports not found!");
        }

        return user.getWeatherReportsByUser().stream().map(WeatherReportServiceImpl::mapToWeatherReportDto)
                .collect(Collectors.toList());

    }

    public static WeatherReportDto mapToWeatherReportDto(WeatherReportEntity reportEntity) {

        return WeatherReportDto.builder()
                .reportId(reportEntity.getReportId())
                .city(reportEntity.getCity())
                .temperature(reportEntity.getTemperature())
                .weatherDescription(reportEntity.getWeatherDescription())
                .createdAt(reportEntity.getCreatedAt())
                .userName(reportEntity.getUser().getUserLogin())
                .build();
    }

}
