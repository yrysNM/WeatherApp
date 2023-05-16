package com.weather.controller;

import com.weather.dto.WeatherReportDto;
import com.weather.entity.WeatherReportEntity;
import com.weather.exception.NotFoundException;
import com.weather.service.WeatherReportService;

import jakarta.validation.Valid;

import java.util.List;

// import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/reports")
public class WeatherReportController {
    private WeatherReportService weatherReportService;

    @Autowired
    public WeatherReportController(WeatherReportService weatherReportService) {
        this.weatherReportService = weatherReportService;
    }

    @PostMapping()
    public ResponseEntity<WeatherReportDto> createReport(@RequestBody @Valid WeatherReportDto weatherReport,
            @RequestParam Integer userId) throws NotFoundException {

        return ResponseEntity.ok(weatherReportService.createReport(weatherReport, userId));
    }

    @PutMapping("/{reportId}")
    public ResponseEntity<WeatherReportDto> updateReportData(@PathVariable("reportId") Long reportId,
            @RequestBody @Valid WeatherReportDto userReportData) throws NotFoundException {
        return ResponseEntity.ok(weatherReportService.updateReportData(reportId, userReportData));
    }

    @GetMapping
    public ResponseEntity<List<WeatherReportDto>> getReportsFromUser(@RequestParam Integer userId, Integer hour)
            throws NotFoundException {

        return ResponseEntity.ok(weatherReportService.getReportsFromUser(userId, hour));
    }

    @GetMapping("/all")
    public ResponseEntity<List<WeatherReportDto>> getAllReports(@RequestParam Integer hour) {
        return ResponseEntity.ok(weatherReportService.getAllReports(hour));
    }
}
