package com.weather.controller;

import com.weather.entity.WeatherReportEntity;
import com.weather.exception.UserNotFoundException;
import com.weather.service.WeatherReportService;

import org.apache.catalina.connector.Response;
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

    @PutMapping("/{reportId}")
    public ResponseEntity updateReportData(@PathVariable("reportId") Long reportId,
            @RequestBody WeatherReportEntity userReportData) {
        try {
            return ResponseEntity.ok(weatherReportService.updateReportData(reportId, userReportData.getTemperature(),
                    userReportData.getWeatherDescription()));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("There is some error!");
        }
    }

    @GetMapping
    public ResponseEntity getReportsFromUser(@RequestParam Integer userId) {
        try {
            return ResponseEntity.ok(weatherReportService.getReportsFromUser(userId));

        } catch (UserNotFoundException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("There is some error!");
        }
    }
}
