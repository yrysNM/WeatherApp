import classNames from 'classnames';
import {useCallback, useEffect, useState} from 'react';

import {CustomDate, cusomDate} from '../../utils/helpers/CustomDate';
import {Modal} from '../Modal';
import {Profile} from '../Profile';
import {
  fetchCurrentCityWeather,
  fetchWeatherDaysTheCity,
} from '../../api/weather';
import {useAppDispatch, useAppSelector} from '../../hooks/redux.hook';

import {ReactComponent as SearchIcon} from '../../assets/icons/searchIcon.svg';
import {ReactComponent as BellIcon} from '../../assets/icons/bellIcon.svg';
import {ReactComponent as ProfileIcon} from '../../assets/icons/profileIcon.svg';
import './header.scss';
import {ICurrentCityWeather} from '../../Interfaces/ICurrentCityWeather';

const Header = () => {
  const [openModalProfile, setOpenModalProfile] = useState(false);
  const {base} = useAppSelector((state) => state.cityWeather);
  const {user} = useAppSelector((state) => state.currentUser);

  const dispatch = useAppDispatch();

  const fetchDefaultCityWeather = useCallback(() => {
    if (!base) {
      dispatch(fetchCurrentCityWeather({cityName: 'Almaty'})).then(
        ({payload}) => {
          const dataWeather = payload as {data: ICurrentCityWeather};

          dispatch(
            fetchWeatherDaysTheCity({
              ...dataWeather.data.coord,
            })
          );
        }
      );
    }
  }, []);

  useEffect(() => {
    fetchDefaultCityWeather();
  }, [fetchDefaultCityWeather]);

  return (
    <>
      <div className="header">
        <div className="header_date">
          <h3 className="dateMonth">
            {CustomDate.getMonthName() + ' ' + new Date().getFullYear()}
          </h3>
          <span className="sub-title">{cusomDate()}</span>
        </div>

        <div className="header_data">
          <div className="header_data-block searchBlock">
            <SearchIcon className="icon-standart searchIcon" />
            <input
              type="text"
              className="input-search"
              placeholder="Search location here"
            />
          </div>
          <div className="header_data-block">
            <BellIcon className="icon-standart" />
          </div>

          <div
            className={classNames('header_data-block', {
              'active-header': openModalProfile,
              isUser: user,
            })}
            onClick={() => setOpenModalProfile(true)}
          >
            <ProfileIcon className="icon-standart" />
          </div>
        </div>
      </div>
      {openModalProfile && (
        <Modal onClose={() => setOpenModalProfile(false)}>
          <Profile onClose={() => setOpenModalProfile(false)} />
        </Modal>
      )}
    </>
  );
};

export {Header};
