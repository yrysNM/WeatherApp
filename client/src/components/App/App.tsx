import { useEffect } from "react";

import { useHttp } from "../../hooks/http.hook";
import { CardWeatherHeader } from "../HeadCardWeather";
import { CardLayout } from "../layouts/CardLayout";
import { TableDayWeather } from "../TableDayWeather";
import { DayWeather, HelperLayoutDay } from "../DayWeather";

import "./app.scss";

const App = () => {
  const { request } = useHttp();

  useEffect(() => {
    request({
      url: `${import.meta.env.VITE_BASE_URL}/wheather/almaty`,
      method: "GET",
    }).then((res) =>
      console.log(
        JSON.stringify({
          res,
        })
      )
    );
  }, []);

  return (
    <div className="container">
      <CardLayout>
        <CardWeatherHeader />
        <TableDayWeather />

        <HelperLayoutDay>
          <DayWeather day="Today" temp={-1} />
          <DayWeather day="Tomorrow" temp={1} />
          <DayWeather day="Day after tomorrow" temp={5} />
        </HelperLayoutDay>
      </CardLayout>
    </div>
  );
};

export { App };
