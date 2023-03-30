package weather.service;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class WeatherService {
  private String _url = "https://api.openweathermap.org/data/2.5";
  private String API_KEY = "1b386436debb80340ab45dca79516e21";
  private RestTemplate restTempplate = new RestTemplate();

  public Object gWeatherDays(double lat, double lon) {
    String ui = _url + "/forecast/?lat=" + lat + "&lon=" + lon + "&appid=" + API_KEY;

    Object weatherDays = restTempplate.getForObject(ui, Object.class);
    // Object[] listWeatherDays = weatherDays.list;

    return weatherDays;
  }

  public List<Object> gLocation(String cityName) {
    String urlApi = _url + "/geo/1.0/direct?g=" + cityName + "&limit=5&appid=" + API_KEY;

    Object[] location = restTempplate.getForObject(urlApi, Object[].class);

    return Arrays.asList(location);
  }

  public Object gWeatherData(String cityName) {
    String wheatherBaseUrl = _url + "/weather?q=" + cityName + "&appid=" + API_KEY;
    System.out.println(wheatherBaseUrl);
    Object weatherData = restTempplate.getForObject(wheatherBaseUrl, Object.class);

    return weatherData;
  }
}
