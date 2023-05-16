package com.weather.service.impl;

import com.weather.entity.UserEntity;
import com.weather.mapper.WeatherReportMapper;
import com.weather.repository.IconRepository;
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

    private IconRepository iconRepository;

    @Autowired
    public WeatherReportServiceImpl(WeatherReportRepository weatherReportRepository,
            UserRepository userRepository, IconRepository iconRepository) {
        this.weatherReportRepository = weatherReportRepository;
        this.userRepository = userRepository;
        this.iconRepository = iconRepository;
    }

    @Override
    public WeatherReportDto createReport(WeatherReportDto weatherReportDto, Integer userId)
            throws NotFoundException {
        UserEntity userEntity = userRepository.getReferenceById(userId);
        String iconCode = iconRepository.findByTitle(weatherReportDto.getTitle()).getIconCode();
        WeatherReportEntity weatherReportEntity = WeatherReportEntity.builder()
                .city(weatherReportDto.getCity())
                .temperature(weatherReportDto.getTemperature())
                .title(weatherReportDto.getTitle())
                .icon(iconCode)
                .weatherDescription(weatherReportDto.getWeatherDescription())
                .user(userEntity)
                .build();

        return WeatherReportMapper.mapToWeatherReportDto(weatherReportRepository.save(weatherReportEntity));
    }

    @Override
    public WeatherReportDto updateReportData(Long reportId, WeatherReportDto weatherReportDto)
            throws NotFoundException {
        WeatherReportEntity weatherReportEntity = weatherReportRepository.findByReportId(reportId);

        if (weatherReportEntity == null) {
            throw new NotFoundException("Report not found! id: " + reportId);
        }

        weatherReportEntity.setTemperature(weatherReportEntity.getTemperature());
        weatherReportEntity.setWeatherDescription(weatherReportDto.getWeatherDescription());
        return WeatherReportMapper.mapToWeatherReportDto(weatherReportRepository.save(weatherReportEntity));
    }

    @Override
    public List<WeatherReportDto> getReportsFromUser(Integer userId, Integer hour){
        UserEntity user = userRepository.getReferenceById(userId);

        return user.getWeatherReportsByUser().stream()
                .map(weatherReport -> WeatherReportMapper.mapToWeatherReportDtoTime(weatherReport, hour))
                .collect(Collectors.toList());

    }

    @Override
    public List<WeatherReportDto> getAllReports(Integer hour) {
        List<WeatherReportEntity> reports = weatherReportRepository.findAll();

        return reports.stream()
                .map(weatherReport -> WeatherReportMapper.mapToWeatherReportDtoTime(weatherReport, hour))
                .collect(Collectors.toList());
    }



}
