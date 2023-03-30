package weather.service;

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
}
