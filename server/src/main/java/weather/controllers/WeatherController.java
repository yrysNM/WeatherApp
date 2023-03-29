package weather.controllers;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class WeatherController {
  private String baseUrl = "https://api.openweathermap.org";
  private String API_KEY = "1b386436debb80340ab45dca79516e21";

  @GetMapping(value = "/location/{cityName}")
  public List<Object> getLocation(@PathVariable("cityName") String cityName) {
    String locationBaseUrl = baseUrl + "/geo/1.0/direct?q=" + cityName + "&limit=5&appid=" + API_KEY;

    RestTemplate restTemplate = new RestTemplate();

    Object[] location = restTemplate.getForObject(locationBaseUrl, Object[].class);

    return Arrays.asList(location);
  }

  @GetMapping(value = "/wheather/{cityName}")
  public Object getWheatherDaily(@PathVariable("cityName") String cityName) {
    String wheatherBaseUrl = baseUrl + "/data/2.5/weather?q=" + cityName + "&appid="
        + API_KEY;

    RestTemplate restTemplate = new RestTemplate();

    Object whaether = restTemplate.getForObject(wheatherBaseUrl, Object.class);

    return whaether;
  }
}
