import { MenuSideBar } from "../../components/MenuSideBar";
import { Header } from "../../components/Header";
import { WeatherComponent } from "../../components/WeatherComponent";
import { TodayOverview } from "../../components/TodayOverview";
import { AverageWeekTemperature } from "../../components/AverageWeekTemperature";

const Main = () => {
  return (
    <div className="main">
      <MenuSideBar />

      <div className="mainContainer">
        <Header />
        <TodayOverview />
        <AverageWeekTemperature />
      </div>

      <div className="weatherContainer">
        <WeatherComponent />
      </div>
    </div>
  );
};

export { Main };
