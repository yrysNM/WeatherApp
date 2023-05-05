import moment from "moment";
import classNames from "classnames";
import { useAppSelector } from "../../hooks/redux.hook";

import { ContentLayout } from "../layouts/contentLayout";

import sunRise from "../../assets/image/sunRise.png";
import sunSet from "../../assets/image/sunSet.png";

import "./sunriesSunset.scss";

export const SunriesSunset = () => {
  const { sys, timezone } = useAppSelector((state) => state.cityWeather);
  const sunRiseDt = moment
    .utc(sys.sunrise, "X")
    .add(timezone, "seconds")
    .format("HH:mm");
  const sunSetDt = new Date(sys.sunset);

  return (
    <ContentLayout title="Sunries & Sunset" isWeather>
      <LayoutSunriesSunset
        img={sunSet}
        text="Sunrise"
        time={`${sunRiseDt} AM`}
        nowTime="4 hourse ago"
        isSunSet={true}
      />
      <LayoutSunriesSunset
        img={sunRise}
        text="Sunset"
        time={`${sunSetDt.getHours()}:${sunSetDt.getMinutes()} PM`}
        nowTime="in 9 hours"
      />
    </ContentLayout>
  );
};

interface ILayoutSunriesSunset {
  img: string;
  text: "Sunrise" | "Sunset";
  time: string;
  nowTime: string;
  isSunSet?: boolean;
}

const LayoutSunriesSunset = ({
  img,
  text,
  time,
  nowTime,
  isSunSet = false,
}: ILayoutSunriesSunset) => {
  return (
    <div
      className={classNames("sunset-sunrise_block ", {
        "sunset-sunrise_block-active": isSunSet,
      })}
    >
      <div className="sunset-sunrise_block-wrapper">
        <div className="sunset-sunrise_block-img">
          <img src={img} alt="sun img" />
        </div>
        <div className="sunset-sunrise_block-text">
          <p className="title-timeText">{text}</p>
          <p className="title-time">{time}</p>
        </div>
      </div>

      <span className="title-timeText">{nowTime}</span>
    </div>
  );
};
