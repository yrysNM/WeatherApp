import {useState} from 'react';
import moment from 'moment';
import classNames from 'classnames';
import {useAppSelector} from '../../hooks/redux.hook';
import {ContentLayout} from '../layouts/contentLayout';
import {CustomDate} from '../../utils/helpers/CustomDate';

import sunRise from '../../assets/image/sunRise.png';
import sunSet from '../../assets/image/sunSet.png';

import './sunriesSunset.scss';

export const SunriesSunset = () => {
  const {sys, timezone} = useAppSelector((state) => state.cityWeather);
  const [currentTime] = useState(moment());

  console.log('test');

  const sunRiseDt = moment
    .utc(sys.sunrise, 'X')
    .add(timezone, 'seconds')
    .format('HH:mm');

  const sunSetDt = moment
    .utc(sys.sunset, 'X ')
    .add(timezone, 'seconds')
    .format('HH:mm');

  return (
    <ContentLayout title="Sunries & Sunset" isWeather>
      <LayoutSunriesSunset
        img={sunSet}
        text="Sunrise"
        time={`${sunRiseDt} AM`}
        nowTime={`${currentTime.diff(
          moment(sunRiseDt, 'HH:mm'),
          'hours'
        )} hourse ago`}
        isSunSet={currentTime.format('A') === 'AM'}
      />
      <LayoutSunriesSunset
        img={sunRise}
        text="Sunset"
        time={`${sunSetDt} PM`}
        nowTime={`in ${
          -1 * currentTime.diff(moment(sunSetDt, 'HH:mm'), 'hours')
        } hours`}
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
