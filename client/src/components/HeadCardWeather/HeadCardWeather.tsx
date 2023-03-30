import { useEffect, useContext } from "react";

import { IWeather } from "../../Interfaces";
import { useHttp } from "../../hooks/http.hook";
import { WeatherContextType } from "../../@types/weatherContext";
import { WeatherContext } from "../../context/weatherContext";

import "./cardWeather.scss";

const CardWeatherHeader = () => {
  const { request } = useHttp();
  const { setWeatherDataFN, weatherData } = useContext(
    WeatherContext
  ) as WeatherContextType;

  useEffect(() => {
    request<IWeather>({
      url: `${import.meta.env.VITE_BASE_URL}/wheather/almaty`,
      method: "GET",
    }).then((res) =>
      setWeatherDataFN({
        weather: res.weather,
        coord: res.coord,
        main: res.main,
        id: res.id,
        name: res.name,
      })
    );
  }, []);

  return (
    <div className="card-wrapper_hBlock">
      {weatherData?.id && (
        <>
          <h3 className="title-fw500 locationTitle">{weatherData.name}</h3>
          <p className="sub-title">{weatherData.weather[0].description}</p>

          <p className="tempText">
            {((weatherData.main?.temp ?? 0) - 273.15).toFixed(0)}°C
          </p>

          <div className="moreInfo">
            <p className="sub-title">
              Pressure: {weatherData.main?.pressure} | Humidity:{" "}
              {weatherData.main?.humidity}°C
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export { CardWeatherHeader };
