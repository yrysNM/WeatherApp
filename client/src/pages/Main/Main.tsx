import { useCallback, useEffect } from "react";
import { useAppDispatch } from "../../hooks/redux.hook";

import { fetchCurrentCityWeather } from "../../api/weather";
import { TodayOverview } from "../../components/TodayOverview";
import { AverageWeekTemperature } from "../../components/AverageWeekTemperature";

const Main = () => {
  const dispatch = useAppDispatch();

  const fetchDefaultCityWeather = useCallback(() => {
    dispatch(fetchCurrentCityWeather({ cityName: "Almaty" }));
  }, []);

  useEffect(() => {
    fetchDefaultCityWeather();
  }, [fetchDefaultCityWeather]);

  return (
    <>
      <TodayOverview />
      <AverageWeekTemperature />
    </>
  );
};

export { Main };
