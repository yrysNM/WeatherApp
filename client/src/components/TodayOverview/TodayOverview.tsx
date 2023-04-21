import { IReactChildren } from "../../Interfaces/ICustomReact";
import { ContentLayout } from "../layouts/contentLayout";

import windImg from "../../../public/assets/image/wing.png";
import rainImg from "../../../public/assets/image/rain.png";
import sunnyImg from "../../../public/assets/image/sunny.png";
import pressureImg from "../../../public/assets/image/pressure.png";
import "./todayOverview.scss";

export const TodayOverview = () => {
  return (
    <ContentLayout title="Today overview">
      <div className="today">
        <div className="today-wrapper">
          <LayoutTodayOverview imgWeather={windImg}>
            <span className="sub-title">Wind Speed</span>
            <p className="title-justFw500">12km/h</p>
          </LayoutTodayOverview>
          <LayoutTodayOverview imgWeather={rainImg}>
            <span className="sub-title">Rain Chanse</span>
            <p className="title-justFw500">24%</p>
          </LayoutTodayOverview>
          <LayoutTodayOverview imgWeather={pressureImg}>
            <span className="sub-title">Pressure</span>
            <p className="title-justFw500">720 hpa</p>
          </LayoutTodayOverview>
          <LayoutTodayOverview imgWeather={sunnyImg}>
            <span className="sub-title">Uv index</span>
            <p className="title-justFw500">2,3</p>
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
