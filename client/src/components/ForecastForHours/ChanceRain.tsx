import moment from 'moment';
import {useAppSelector} from '../../hooks/redux.hook';
import {ContentLayout} from '../layouts/contentLayout';
import './chanceRain.scss';

export const ForecastForHours = () => {
  const {list} = useAppSelector((state) => state.weatherDailyForecast);

  return (
    <ContentLayout title="Forecast rain for 3 hours" isWeather={true}>
      {list.map((forecast) => (
        <LayoutChanceRain
          key={forecast.dt}
          timeText={moment(forecast.dt_txt).format('HH a')}
          procent={forecast.main.humidity}
        />
      ))}
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
      <div style={{width: `${procent}%`}} className="val" />
    </div>

    <span>{procent}%</span>
  </div>
);
