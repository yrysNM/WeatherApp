import { Header } from "../../components/Header";
import { TodayOverview } from "../../components/TodayOverview";
import { AverageWeekTemperature } from "../../components/AverageWeekTemperature";

const Main = () => {
  return (
    <>
      <Header />
      <TodayOverview />
      <AverageWeekTemperature />
    </>
  );
};

export { Main };
