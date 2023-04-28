import cloudImage from "../../assets/image/clound.png";

import "./weatherTemperature.scss";

export const WeatherTemperature = () => {
  return (
    <div className="weatherTemperature">
      <div className="weatherImg">
        <img src={cloudImage} alt="weather img" />
      </div>
      <div className="weatherTemperature-data">
        <p className="temp">20° C</p>

        <span className="descr">Dramatic Cloudy</span>
      </div>
    </div>
  );
};
