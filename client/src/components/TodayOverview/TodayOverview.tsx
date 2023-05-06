import { useAppSelector } from "../../hooks/redux.hook";
import { IReactChildren } from "../../Interfaces/ICustomReact";
import { ContentLayout } from "../layouts/contentLayout";

import windImg from "../../assets/image/wing.png";
import rainImg from "../../assets/image/rain.png";
import sunnyImg from "../../assets/image/sunny.png";
import pressureImg from "../../assets/image/pressure.png";
import "./todayOverview.scss";

export const TodayOverview = () => {
  const { main, wind, changeTemp } = useAppSelector(
    (state) => state.cityWeather
  );

  return (
    <ContentLayout title="Today overview">
      <div className="today">
        <div className="today-wrapper">
          <LayoutTodayOverview imgWeather={windImg}>
            <span className="sub-title">Wind Speed</span>
            <p className="title-justFw500">{wind.speed}km/h</p>
          </LayoutTodayOverview>
          <LayoutTodayOverview imgWeather={rainImg}>
            <span className="sub-title">Feels like</span>
            <p className="title-justFw500">{changeTemp?.feels_like}</p>
          </LayoutTodayOverview>
          <LayoutTodayOverview imgWeather={pressureImg}>
            <span className="sub-title">Pressure</span>
            <p className="title-justFw500">{main.pressure} hpa</p>
          </LayoutTodayOverview>
          <LayoutTodayOverview imgWeather={sunnyImg}>
            <span className="sub-title">Humidity</span>
            <p className="title-justFw500">{main.humidity}%</p>
          </LayoutTodayOverview>
        </div>
      </div>
    </ContentLayout>
  );
};

interface ILayoutTodayOverview extends IReactChildren {
  imgWeather: string;
}

const LayoutTodayOverview = ({
  imgWeather,
  children,
}: ILayoutTodayOverview) => {
  return (
    <div className="todayOverview-block">
      <span className="todayIcon">
        <img src={imgWeather} alt="weather " />
      </span>

      <div className="todayOverview-today_text">{children}</div>
    </div>
  );
};
