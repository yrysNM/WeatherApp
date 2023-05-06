package com.weather.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.weather.service.WeatherService;

@RestController
public class WeatherController {

  private WeatherService weatherService;

  @Autowired
  public WeatherController(WeatherService weatherService) {
    this.weatherService = weatherService;
  }

  @GetMapping(value = "/location/{cityName}")
  public List<Object> getLocation(@PathVariable("cityName") String cityName) {

    return weatherService.gLocation(cityName);
  }

  @GetMapping(value = "/weather_city/{cityName}")
  public Object getWheatherDaily(@PathVariable("cityName") String cityName) {

    return weatherService.gWeatherData(cityName);
  }

  @RequestMapping(value = "/weather_forecast", params = { "lat", "lon" }, method = RequestMethod.GET)
  @ResponseBody
  public Object getWeatherDays(@RequestParam String lat,
      @RequestParam String lon) {

    return weatherService.gWeatherDays(lat, lon);
  }
}
