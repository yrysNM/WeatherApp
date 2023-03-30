export interface IWeather extends ICoord, IMainWeatherInfo, IWind, ISys {
  weather: IWeatherObj[];
  base: string;
  visibility: number;
  clouds: {
    all: number;
  };
  dt: number;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface ICoord {
  coord: {
    lon: number;
    lat: number;
  };
}

interface IWeatherObj {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface IMainWeatherInfo {
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
}

interface IWind {
  wind: {
    spped: number;
    deg: number;
  };
}

interface ISys {
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
}
