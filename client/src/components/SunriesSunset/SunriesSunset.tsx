import { ContentLayout } from "../layouts/contentLayout";
import { ReactComponent as SunRise } from "../../../public/assets/image/sunRise.svg";
import sunSet from "../../../public/assets/image/sunSet.png";

export const SunriesSunset = () => {
  return (
    <ContentLayout title="Sunries & Sunset" isWeather>
      <LayoutSunriesSunset
        img={<SunRise />}
        text="Sunrise"
        time="4:20 AM"
        nowTime="4 hourse ago"
      />
    </ContentLayout>
  );
};

interface ILayoutSunriesSunset {
  img: JSX.Element;
  text: "Sunrise" | "Sunset";
  time: string;
  nowTime: string;
}

const LayoutSunriesSunset = ({
  img,
  text,
  time,
  nowTime,
}: ILayoutSunriesSunset) => {
  return (
    <div className="sunset-sunrise_block">
      <span className="icon">{img}</span>
      <div className="sunset-sunrise_block-text">
        <p className="sub-title">{text}</p>
        <p className="title-fwJust500">{time}</p>
      </div>

      <span className="sub-title">{nowTime}</span>
    </div>
  );
};
