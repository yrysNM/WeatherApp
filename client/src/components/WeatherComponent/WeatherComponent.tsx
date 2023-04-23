import { ChanceRain } from "../ChanceRain";
import { SunriesSunset } from "../SunriesSunset";
import { WeatherTemperature } from "../WeatherTemperature";
import "./weatherComponent.scss";

const WeatherComponent = () => {
  return (
    <div className="weather">
      <div className="weather_head">
        <div>
          <h3 className="title-fw400" style={{ fontSize: 25 }}>
            Name Surname
          </h3>
          <span className="weather-cityTitle sub-title">
            Almaty, Kazakhstan
          </span>
        </div>
        <div>
          <span>08:54 AM</span>
        </div>
      </div>

      <WeatherTemperature />
      <ChanceRain />
      <SunriesSunset />
    </div>
  );
};

export { WeatherComponent };
