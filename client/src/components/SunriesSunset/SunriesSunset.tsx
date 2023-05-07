import {useCallback, useEffect, useState} from 'react';
import moment from 'moment';
import classNames from 'classnames';
import {useAppSelector} from '../../hooks/redux.hook';
import {ContentLayout} from '../layouts/contentLayout';

import sunRise from '../../assets/image/sunRise.png';
import sunSet from '../../assets/image/sunSet.png';

import './sunriesSunset.scss';

export const SunriesSunset = () => {
  const {sys, timezone} = useAppSelector((state) => state.cityWeather);
  const sunRiseDt = moment
    .utc(sys.sunrise, 'X')
    .add(timezone, 'seconds')
    .format('HH:mm');

  const sunSetDt = moment
    .utc(sys.sunset, 'X ')
    .add(timezone, 'seconds')
    .format('HH:mm');

  const [currentTime] = useState(moment());

  const [checkSunrise, setCheckSunrise] = useState(0);
  const [checkSunset, setCheckSunset] = useState(0);

  function updateTime() {
    setCheckSunrise(currentTime.diff(moment(sunRiseDt, 'HH:mm'), 'hours'));
    setCheckSunset(currentTime.diff(moment(sunSetDt, 'HH:mm'), 'hours'));
  }

  useEffect(() => {
    updateTime();
  }, [sunRiseDt, sunSetDt]);

  return (
    <ContentLayout title="Sunries & Sunset" isWeather>
      <LayoutSunriesSunset
        img={sunSet}
        text="Sunrise"
        time={`${sunRiseDt} AM`}
        nowTime={
          checkSunrise > 0
            ? `${checkSunrise} hourse ago`
            : `in ${checkSunrise} hours`
        }
        isSunSet={currentTime.format('A') === 'AM'}
      />
      <LayoutSunriesSunset
        img={sunRise}
        text="Sunset"
        time={`${sunSetDt} PM`}
        nowTime={
          checkSunset < 0
            ? `in ${checkSunset * -1} hours`
            : `${checkSunset} hours ago`
        }
        isSunSet={currentTime.format('A') === 'PM'}
      />
    </ContentLayout>
  );
};

interface ILayoutSunriesSunset {
  img: string;
  text: 'Sunrise' | 'Sunset';
  time: string;
  nowTime: string;
  isSunSet?: boolean;
}

const LayoutSunriesSunset = ({
  img,
  text,
  time,
  nowTime,
  isSunSet = false,
}: ILayoutSunriesSunset) => {
  return (
    <div
      className={classNames('sunset-sunrise_block ', {
        'sunset-sunrise_block-active': isSunSet,
      })}
    >
      <div className="sunset-sunrise_block-wrapper">
        <div className="sunset-sunrise_block-img">
          <img src={img} alt="sun img" />
        </div>
        <div className="sunset-sunrise_block-text">
          <p className="title-timeText">{text}</p>
          <p className="title-time">{time}</p>
        </div>
      </div>

      <span className="title-timeText">{nowTime}</span>
    </div>
  );
};
