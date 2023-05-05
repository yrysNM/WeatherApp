import { useCallback, useEffect } from "react";
import { useAppDispatch } from "../../hooks/redux.hook";

import { fetchCurrentCityWeather } from "../../api/weather";
import { TodayOverview } from "../../components/TodayOverview";
import { AverageWeekTemperature } from "../../components/AverageWeekTemperature";
import { useEffect } from "react";
import axios from "axios";

const Main = () => {
<<<<<<< Updated upstream
  const dispatch = useAppDispatch();

  const fetchDefaultCityWeather = useCallback(() => {
    dispatch(fetchCurrentCityWeather({ cityName: "Almaty" }));
  }, []);

  useEffect(() => {
    fetchDefaultCityWeather();
  }, [fetchDefaultCityWeather]);
=======
  useEffect(() => {
    axios
      .get("http://localhost:8080/weather/almaty")
      .then((res) => console.log(res.data));
  }, []);
>>>>>>> Stashed changes

  return (
    <>
      <TodayOverview />
      <AverageWeekTemperature />
    </>
  );
};

export { Main };
