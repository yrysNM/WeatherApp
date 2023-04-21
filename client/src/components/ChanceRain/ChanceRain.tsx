import { ContentLayout } from "../layouts/contentLayout";
import "./chanceRain.scss";

export const ChanceRain = () => {
  return (
    <ContentLayout title="Chance of rain" isWeather={true}>
      <LayoutChanceRain timeText="7 PM" procent={44} />
      <LayoutChanceRain timeText="8 PM" procent={30} />
      <LayoutChanceRain timeText="9 PM" procent={67} />
      <LayoutChanceRain timeText="10 PM" procent={72} />
    </ContentLayout>
  );
};

interface ILayoutChanceRain {
  timeText: string;
  procent: number;
}

const LayoutChanceRain = ({
  timeText,
  procent,
}: ILayoutChanceRain): JSX.Element => (
  <div className="chanceRain-block">
    <span>{timeText}</span>

    <div className="procentBlock">
      <div style={{ width: `${procent}%` }} className="val" />
    </div>

    <span>{procent}%</span>
  </div>
);
