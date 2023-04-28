import { useContext } from "react";

import { WeatherContext } from "../../../context/weatherContext";

import { IReactChildren } from "../../../Interfaces/ICustomReact";
import { WeatherContextType } from "../../../@types/weatherContext";

export const CardLayout: React.FC<IReactChildren> = ({ children }) => {
  const { weatherData } = useContext(WeatherContext) as WeatherContextType;

  function initialBackgroundImage(weatherCompare: string) {
    switch (weatherCompare) {
      case "Clouds":
        return "url('https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif')";
      case "Fog":
        return "url('https://mdbgo.io/ascensus/mdb-advanced/img/fog.gif')";
      case "Snow":
        return "url('https://mdbgo.io/ascensus/mdb-advanced/img/snow.gif')";
      case "Rain":
        return "url('https://mdbgo.io/ascensus/mdb-advanced/img/rain.gif')";
      case "Clear":
        return "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
      case "Thunderstorm":
        return "url('https://mdbgo.io/ascensus/mdb-advanced/img/thunderstorm.gif')";
      default:
        return "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
    }
  }

  return (
    <div className="card">
      <div
        className="card-wrapper"
        style={{
          backgroundImage:
            weatherData.weather[0] &&
            initialBackgroundImage(weatherData.weather[0].main),
        }}
      >
        {children}
      </div>
    </div>
  );
};
