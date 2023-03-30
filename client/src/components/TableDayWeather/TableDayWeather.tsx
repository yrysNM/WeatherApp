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
      <div
        className="tableDays-wrapper"
        style={{
          gridTemplateColumns: `repeat(${
            listDailyData.length + 1
          }, minmax(50px, 1fr))`,
        }}
      >
        <div className="box">Now</div>
        {listDailyData.map(({ dt_txt, dt }) => {
          return (
            <div className="box" key={dt}>
              {dt_txt.substring(11, 13)}:00
            </div>
          );
        })}

        {/* Table Row */}
        <div
          className="row"
          style={{
            gridTemplateColumns: `repeat(${
              listDailyData.length + 1
            }, minmax(50px, 1fr))`,
          }}
        >
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
