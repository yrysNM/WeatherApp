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

import java.time.LocalDate;
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
        WeatherReportEntity weatherReportEntity = weatherReportRepository.getReferenceById(reportId);

        weatherReportEntity.setTemperature(weatherReportDto.getTemperature());
        weatherReportEntity.setWeatherDescription(weatherReportDto.getWeatherDescription());
        return WeatherReportMapper.mapToWeatherReportDto(weatherReportRepository.save(weatherReportEntity));
    }

    @Override
    public List<WeatherReportDto> getReportsFromUser(Integer userId, Integer hour){
        UserEntity user = userRepository.getReferenceById(userId);

        return user.getWeatherReportsByUser().stream()
                .map(weatherReport -> WeatherReportMapper.mapToWeatherReportDtoGet(weatherReport, user, hour))
                .collect(Collectors.toList());

    }

    @Override
    public List<WeatherReportDto> getAllReports(Integer userId, Integer hour) {
        List<WeatherReportEntity> reports = weatherReportRepository.findAll();
        UserEntity user = userRepository.getReferenceById(userId);

        return reports.stream()
                .map(weatherReport -> WeatherReportMapper.mapToWeatherReportDtoGet(weatherReport, user, hour))
                .collect(Collectors.toList());
    }

    @Override
    public Long deleteReport(Long reportId) {
        weatherReportRepository.deleteById(reportId);
        return reportId;
    }

    @Override
    public Integer rankUp(Long reportId, Integer userId) {
        WeatherReportEntity weatherReportEntity = weatherReportRepository.getReferenceById(reportId);
        UserEntity user = userRepository.getReferenceById(userId);
        List<UserEntity> dislikes = weatherReportEntity.getDislikes();
        List<UserEntity> likes = weatherReportEntity.getLikes();

        if (likes.contains(user)) {
            likes.remove(user);
        } else {
            dislikes.remove(user);
            likes.add(user);
        }
        weatherReportRepository.save(weatherReportEntity);
        return userId;
    }

    @Override
    public Integer rankDown(Long reportId, Integer userId) {
        WeatherReportEntity weatherReportEntity = weatherReportRepository.getReferenceById(reportId);
        UserEntity user = userRepository.getReferenceById(userId);
        List<UserEntity> dislikes = weatherReportEntity.getDislikes();
        List<UserEntity> likes = weatherReportEntity.getLikes();

        if (dislikes.contains(user)) {
            dislikes.remove(user);
        } else {
            likes.remove(user);
            dislikes.add(user);
        }
        weatherReportRepository.save(weatherReportEntity);
        return userId;
    }

    @Override
    public List<WeatherReportDto> getAllByFilter(Integer userId, Integer hour, LocalDate date, String location) {
        List<WeatherReportEntity> allReports = weatherReportRepository.findAll();
        List<WeatherReportEntity> filteredReports = WeatherReportMapper.filtered(date, location, allReports);
        UserEntity user = userRepository.getReferenceById(userId);

        return filteredReports.stream()
                .map(weatherReport -> WeatherReportMapper.mapToWeatherReportDtoGet(weatherReport, user, hour))
                .collect(Collectors.toList());
    }

    @Override
    public List<WeatherReportDto> getAllReportsAnonymous(Integer hour) {
        List<WeatherReportEntity> reports = weatherReportRepository.findAll();

        return reports.stream()
                .map(weatherReport -> WeatherReportMapper.mapToWeatherReportDtoAnonymous(weatherReport, hour))
                .collect(Collectors.toList());
    }

    @Override
    public List<WeatherReportDto> getAllByFilterAnonymous(Integer hour, LocalDate date, String location) {
        List<WeatherReportEntity> allReports = weatherReportRepository.findAll();
        List<WeatherReportEntity> filteredReports = WeatherReportMapper.filtered(date, location, allReports);

        return filteredReports.stream()
                .map(weatherReport -> WeatherReportMapper.mapToWeatherReportDtoAnonymous(weatherReport, hour))
                .collect(Collectors.toList());
    }

}
