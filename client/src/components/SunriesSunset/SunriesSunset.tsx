import classNames from "classnames";

import { ContentLayout } from "../layouts/contentLayout";
import { CustomDate } from "../../utils/helper/CustomDate";

import sunRise from "../../../public/assets/image/sunRise.png";
import sunSet from "../../../public/assets/image/sunSet.png";

import "./sunriesSunset.scss";

const getLotitudeAndLongitude = (position: GeolocationPosition) => {
  const cDate = new CustomDate();

  console.log(
    cDate.getSunriseAndSunset(
      new Date(),
      43.25,
      76.95
      // position.coords.longitude
    )
  );
};

export const SunriesSunset = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getLotitudeAndLongitude);
  }

  return (
    <ContentLayout title="Sunries & Sunset" isWeather>
      <LayoutSunriesSunset
        img={sunSet}
        text="Sunrise"
        time="4:20 AM"
        nowTime="4 hourse ago"
        isSunSet={true}
      />
      <LayoutSunriesSunset
        img={sunRise}
        text="Sunset"
        time="5:50 AM"
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
