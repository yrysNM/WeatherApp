import { MenuSideBar } from "../../components/MenuSideBar";
import { Header } from "../../components/Header";
import { WeatherComponent } from "../../components/WeatherComponent";

const Main = () => {
  return (
    <div className="main">
      <MenuSideBar />

      <div className="mainContainer">
        <Header />
      </div>

      <div className="mainContainer">
        <WeatherComponent />
      </div>
    </div>
  );
};

export { Main };
