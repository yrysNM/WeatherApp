package com.weather.controller;

import com.weather.dto.WeatherReportDto;
import com.weather.exception.NotFoundException;
import com.weather.service.WeatherReportService;

import jakarta.validation.Valid;

import java.time.LocalDate;
import java.util.List;

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
    public ResponseEntity<List<WeatherReportDto>> getAllReports(@RequestParam Integer userId, Integer hour) {
        return ResponseEntity.ok(weatherReportService.getAllReports(userId, hour));
    }

    @PutMapping("/dislike")
    public ResponseEntity<Integer> rankDown(@RequestParam Long reportId, Integer userId) {
        return ResponseEntity.ok(weatherReportService.rankDown(reportId, userId));
    }

    @PutMapping("/like")
    public ResponseEntity<Integer> rankUp(@RequestParam Long reportId, Integer userId) {
        return ResponseEntity.ok(weatherReportService.rankUp(reportId, userId));
    }

    @DeleteMapping("/{reportId}")
    public ResponseEntity<Long> deleteReport(@PathVariable Long reportId) {
        return ResponseEntity.ok(weatherReportService.deleteReport(reportId));
    }

    @GetMapping("/all/filter")
    public ResponseEntity<List<WeatherReportDto>> getAllReportsByFilter(@RequestParam Integer userId,
                                                                        Integer hour, LocalDate date,
                                                                        String location) {
        return ResponseEntity.ok(weatherReportService.getAllByFilter(userId, hour, date, location));
    }

    @GetMapping("anonymous/all")
    public ResponseEntity<List<WeatherReportDto>> getAllReportsAnonymous(@RequestParam Integer hour) {
        return ResponseEntity.ok(weatherReportService.getAllReportsAnonymous(hour));
    }

    @GetMapping("anonymous/all/filter")
    public ResponseEntity<List<WeatherReportDto>> getAllReportsByFilterAnonymous(@RequestParam Integer hour,
                                                                                 LocalDate date, String location) {
        return ResponseEntity.ok(weatherReportService.getAllByFilterAnonymous(hour, date, location));
    }

}
