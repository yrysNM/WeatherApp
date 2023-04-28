import { Outlet } from "react-router-dom";

import { MenuSideBar } from "../../MenuSideBar";
import { WeatherComponent } from "../../WeatherComponent";

export const PageLayout = () => {
  return (
    <div className="main">
      <MenuSideBar />

      <div className="mainContainer">
        <Outlet />
      </div>

      <div className="weatherContainer">
        <WeatherComponent />
      </div>
    </div>
  );
};
