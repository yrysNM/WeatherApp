package weather.entity;

public class Weather {
  private String lat;
  private String lon;
  private String exclude;

  public Weather(String lat, String lon, String exclude) {
    this.lat = lat;
    this.lon = lon;
    this.exclude = exclude;
  }

  public Weather() {
  }

  public String getLat() {
    return lat;
  }

  public void setLat(String lat) {
    this.lat = lat;
  }

  public String getLon() {
    return lon;
  }

  public void setLon(String lon) {
    this.lon = lon;
  }

  public String getExclude() {
    return exclude;
  }

  public void setExclude(String exclude) {
    this.exclude = exclude;
  }

}
