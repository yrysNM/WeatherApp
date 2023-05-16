import {useAppSelector} from '../../hooks/redux.hook';

import {ForecastForHours} from '../ForecastForHours';
import {SunriesSunset} from '../SunriesSunset';
import {WeatherTemperature} from '../WeatherTemperature';
import {CustomDate} from '../../utils/helpers/CustomDate';

import './weatherComponent.scss';

const WeatherComponent = () => {
  const {user} = useAppSelector((state) => state.currentUser);

  return (
    <div className="weather">
      <div className="weather_head">
        <div>
          <h3 className="title-fw400" style={{fontSize: 25}}>
            {user ? user.userLogin : 'Anonymous'}
          </h3>
          <span className="weather-cityTitle sub-title">
            Almaty, Kazakhstan
          </span>
        </div>
        <div>
          <span>{CustomDate.convertTo24Hour(new Date().toTimeString())}</span>
        </div>
      </div>

      <WeatherTemperature />
      <ForecastForHours />
      <SunriesSunset />
    </div>
  );
};

export {WeatherComponent};
