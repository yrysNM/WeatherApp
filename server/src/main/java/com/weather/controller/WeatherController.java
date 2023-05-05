package com.weather.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.weather.service.WeatherService;

@RestController
public class WeatherController {

  private WeatherService weatherService;

  public WeatherController(WeatherService weatherService) {
    this.weatherService = weatherService;
  }

  @GetMapping(value = "/location/{cityName}")
  public List<Object> getLocation(@PathVariable("cityName") String cityName) {

    return weatherService.gLocation(cityName);
  }

  @GetMapping(value = "/weather/{cityName}")
  public Object getWheatherDaily(@PathVariable("cityName") String cityName) {

    return weatherService.gWeatherData(cityName);
  }

  @RequestMapping("/weather/days")
  public Object getWeatherDays(@RequestHeader(value = "lat", required = true) double lat,
      @RequestHeader(value = "lon", required = true) double lon) {
    return weatherService.gWeatherDays(lat, lon);
  }
}
