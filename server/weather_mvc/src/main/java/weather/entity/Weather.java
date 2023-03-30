package weather.entity;

import java.util.List;

public class Weather {
  private double lat;
  private double lon;
  private String exclude;
  private List<Object> weatherDays;

  class BuilderWeather {
    Weather weather;

    public BuilderWeather() {
      weather = new Weather();
    }

    BuilderWeather withLat(double lat) {
      weather.lat = lat;
      return this;
    }

    BuilderWeather withLon(double lon) {
      weather.lon = lon;
      return this;
    }

    BuilderWeather withExclude(String ex) {
      weather.exclude = ex;
      return this;
    }

    BuilderWeather withWeatherDays(List<Object> weatherDays) {
      weather.weatherDays = weatherDays;
      return this;
    }

    Weather build() {
      return weather;
    }
  }

  public double getLat() {
    return lat;
  }

  public void setLat(double lat) {
    this.lat = lat;
  }

  public double getLon() {
    return lon;
  }

  public void setLon(double lon) {
    this.lon = lon;
  }

  public String getExclude() {
    return exclude;
  }

  public void setExclude(String exclude) {
    this.exclude = exclude;
  }

  public List<Object> getWeatherDays() {
    return weatherDays;
  }

  public void setWeatherDays(List<Object> weatherDays) {
    this.weatherDays = weatherDays;
  }

}
