import { CardWeatherHeader } from "../HeadCardWeather";
import { CardLayout } from "../layouts/CardLayout";
import { TableDayWeather } from "../TableDayWeather";
import { DayWeather, HelperLayoutDay } from "../DayWeather";

import "./app.scss";

const App = () => {
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
