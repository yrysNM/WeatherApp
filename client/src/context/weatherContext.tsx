import { createContext, useState } from "react";
import { WeatherContextType, IGeneralWeather } from "../@types/weatherContext";
import { IReactChildren } from "../Interfaces/ICustomReact";

export const WeatherContext = createContext<WeatherContextType | null>(null);

const WeatherProvider: React.FC<IReactChildren> = ({ children }) => {
  const [weatherData, setWeatherData] = useState<IGeneralWeather>({
    weather: [],
    id: 0,
    name: "",
  });

  const setWeatherDataFN = (weather: IGeneralWeather) => {
    setWeatherData(weather);
  };

  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherDataFN }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
