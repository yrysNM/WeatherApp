package com.weather.service;

import java.util.Arrays;
import java.util.List;

import com.weather.entity.UserEntity;
import com.weather.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class WeatherService {
  private final String _url = "https://api.openweathermap.org/data/2.5";
  private final String API_KEY = "1b386436debb80340ab45dca79516e21";
  private RestTemplate restTempplate = new RestTemplate();


  @Autowired
  private UserRepository userRepository;

  public Object gWeatherDays(String lat, String lon) {
    String ui = _url + "/forecast/?lat=" + lat + "&lon=" + lon + "&appid=" + API_KEY;

    return restTempplate.getForObject(ui, Object.class);
  }

  public List<Object> gLocation(String cityName) {
    String urlApi = _url + "/geo/1.0/direct?g=" + cityName + "&limit=5&appid=" + API_KEY;

    Object[] location = restTempplate.getForObject(urlApi, Object[].class);

    return Arrays.asList(location);
  }

  public Object gWeatherData(String cityName) {
    String wheatherBaseUrl = _url + "/weather?q=" + cityName + "&appid=" + API_KEY;

    return restTempplate.getForObject(wheatherBaseUrl, Object.class);
  }
}
