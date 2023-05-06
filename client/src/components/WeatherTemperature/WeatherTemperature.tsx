import { useAppSelector } from "../../hooks/redux.hook";

import cloudImage from "../../assets/image/clound.png";

import "./weatherTemperature.scss";

export const WeatherTemperature = () => {
  const { weather, main, changeTemp } = useAppSelector(
    (state) => state.cityWeather
  );

  return (
    <>
      {weather.map((data) => (
        <div key={data.id} className="weatherTemperature">
          <div className="weatherImg">
            <img
              src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
              alt="weather img"
            />
          </div>
          <div className="weatherTemperature-data">
            <p className="temp">{changeTemp?.temp}</p>

            <span className="descr" style={{ textTransform: "capitalize" }}>
              {data.description}
            </span>
          </div>
        </div>
      ))}
    </>
  );
};
