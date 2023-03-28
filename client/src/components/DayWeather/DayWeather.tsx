import { IReactChildren } from "../../Interfaces/ICustomReact";

import "./dayWeather.scss";

interface IDay {
  day: string;
  temp: number;
}

export const HelperLayoutDay: React.FC<IReactChildren> = ({ children }) => {
  return <div className="day">{children}</div>;
};

export const DayWeather = ({ day, temp }: IDay) => {
  return (
    <div className="day-info">
      <p className="title-fw700">{day}</p>
      <p className="sub-title">
        {temp}
        <sup>°</sup>
      </p>
    </div>
  );
};
