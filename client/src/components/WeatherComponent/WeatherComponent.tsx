import {useCallback, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/redux.hook';

import {fetchWeatherDaysTheCity} from '../../api/weather';

import {ForecastForHours} from '../ForecastForHours';
import {SunriesSunset} from '../SunriesSunset';
import {WeatherTemperature} from '../WeatherTemperature';
import {CustomDate} from '../../utils/helpers/CustomDate';

import './weatherComponent.scss';

const WeatherComponent = () => {
  const {isLogged} = useAppSelector((state) => state.currentUser);
  const {coord} = useAppSelector((state) => state.cityWeather);
  const dispatch = useAppDispatch();

  const fetchForecast = useCallback(() => {
    if (coord?.lat) {
      dispatch(
        fetchWeatherDaysTheCity({
          ...coord,
        })
      );
    }
  }, [coord.lat]);

  useEffect(() => {
    fetchForecast();
  }, [fetchForecast]);

  function weatherHead() {
    if (isLogged) {
      return (
        <>
          <h3 className="title-fw400" style={{fontSize: 25}}>
            Name Surname
          </h3>
          <span className="weather-cityTitle sub-title">
            Almaty, Kazakhstan
          </span>
        </>
      );
    } else {
      return (
        <h3 className="title-fw400" style={{fontSize: 25}}>
          Almaty, Kazakhstan
        </h3>
      );
    }
  }

  const varHead = weatherHead();

  return (
    <div className="weather">
      <div className="weather_head">
        <div>{varHead}</div>
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
