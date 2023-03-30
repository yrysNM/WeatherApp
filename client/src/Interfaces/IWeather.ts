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

export interface IListWeatherDays extends IMainWeatherInfo, IWind {
  dt: number;
  weather: IWeatherObj[];
  clouds: {
    all: number;
  };
  visibility: number;
  pop: number;
  sys: {
    pod: string;
  };
  dt_txt: string;
}

export interface ICity extends ICoord {
  city: {
    country: string;
    id: number;
    name: string;
    population: number;
    sunrise: number;
    sunset: number;
    timezone: number;
  };
}

export interface IWeatherDays extends ICity {
  cnt: number;
  cod: string;
  message: number;
  list: IListWeatherDays[];
}

export interface ICoord {
  coord: {
    lon: number;
    lat: number;
  };
}

export interface IWeatherObj {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IMainWeatherInfo {
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level?: number;
    grnd_level?: number;
    temp_kf?: number;
  };
}

interface IWind {
  wind: {
    spped: number;
    deg: number;
    gust?: number;
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
