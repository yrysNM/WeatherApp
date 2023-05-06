package com.weather.controller;

import com.weather.entity.WeatherReportEntity;
import com.weather.service.WeatherReportService;
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

    @PostMapping
    public ResponseEntity createReport(@RequestBody WeatherReportEntity weatherReportEntity,
                                       @RequestParam Integer userId) {
        try {
            return ResponseEntity.ok(weatherReportService.createReport(weatherReportEntity, userId));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("There is some error!");
        }
    }

    @PutMapping
    public ResponseEntity updateReportData(@RequestParam Long reportId, Integer temperature, String description) {
        try {
            return ResponseEntity.ok(weatherReportService.updateReportData(reportId, temperature, description));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("There is some error!");
        }
    }
}
