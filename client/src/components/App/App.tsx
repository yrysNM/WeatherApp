import { WeatherCard } from "../WeatherCard";
import WeatherProvider from "../../context/weatherContext";

import "./app.scss";

const App = () => {
  return (
    <div className="container">
      <WeatherProvider>
        <WeatherCard />
      </WeatherProvider>
    </div>
  );
};

export { App };
