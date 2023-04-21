package weather.controllers;

// import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
// import org.springframework.web.client.RestTemplate;

import weather.service.WeatherService;

@RestController
public class WeatherController {
  @Autowired
  private WeatherService weatherService;

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
