import { useContext } from "react";

import { IListWeatherDays } from "../../Interfaces";
import { WeatherContext } from "../../context/weatherContext";

import "./tableDayWeather.scss";
import { IGeneralWeather } from "../../@types/weatherContext";

interface ITable {
  listDailyData: IListWeatherDays[];
}

export const TableDayWeather = ({ listDailyData }: ITable) => {
  const { main } = useContext(WeatherContext)?.weatherData as IGeneralWeather;

  return (
    <div className="tableDays">
      <div className="tableDays-wrapper">
        <div className="box">Now</div>
        <div className="box">12:00</div>
        <div className="box">15:00</div>
        <div className="box">18:00</div>
        <div className="box">21:00</div>

        {/* Table Row */}
        <div className="row">
          <div className="box">{((main?.temp ?? 0) - 273.15).toFixed(2)}°</div>
          {listDailyData.map((weatherDays) => (
            <div className="box" key={weatherDays.dt}>
              {(weatherDays.main.temp - 273.15).toFixed(2)}°
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
