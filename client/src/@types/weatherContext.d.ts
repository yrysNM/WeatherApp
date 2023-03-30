// @types.weatherContext.ts
import type { IMainWeatherInfo, IWeatherObj, ICoord } from "../Interfaces";

export interface IGeneralWeather
  extends Partial<IMainWeatherInfo>,
    Partial<ICoord> {
  weather: IWeatherObj[];
  id: number;
  name: string;
}

export type WeatherContextType = {
  weatherData: IGeneralWeather;
  setWeatherDataFN: (weather: IGeneralWeather) => void;
};
