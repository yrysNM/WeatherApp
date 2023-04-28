import { Outlet } from "react-router-dom";

import { MenuSideBar } from "../../MenuSideBar";
import { WeatherComponent } from "../../WeatherComponent";
import { Header } from "../../Header";

export const PageLayout = () => {
  return (
    <div className="main">
      <MenuSideBar />

      <div className="mainContainer">
        <Header />
        <Outlet />
      </div>

      <div className="weatherContainer">
        <WeatherComponent />
      </div>
    </div>
  );
};
