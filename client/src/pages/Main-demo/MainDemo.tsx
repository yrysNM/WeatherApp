import { WeatherCard } from "../../components/WeatherCard";
import WeatherProvider from "../../context/weatherContext";

const MainDemo = () => (
  <div className="container">
    <WeatherProvider>
      <WeatherCard />
    </WeatherProvider>
  </div>
);

export { MainDemo };
