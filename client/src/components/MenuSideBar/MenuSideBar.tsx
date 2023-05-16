import {useNavigate} from 'react-router-dom';
import {IconTextBlock} from '../Blocs';
import {Settings} from '../Settings';
import {useAppDispatch, useAppSelector} from '../../hooks/redux.hook';
import {logoutCurrentUser} from '../../redux/modules/currentUserSlice';

import {ReactComponent as HomeIcon} from '../../assets/icons/homeIcon.svg';
import {ReactComponent as MapIcon} from '../../assets/icons/mapIcon.svg';
import {ReactComponent as MyWeather} from '../../assets/icons/myWeather.svg';
import {ReactComponent as ReportsIcon} from '../../assets/icons/reportsIcon.svg';
import {ReactComponent as LogoutIcon} from '../../assets/icons/logoutIcon.svg';

import logoImg from '../../assets/image/logoImg.png';

import './menuSideBar.scss';

const MenuSideBar = () => {
  const {isLogged, user} = useAppSelector((state) => state.currentUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function systemBlocks() {
    if (isLogged) {
      return (
        <>
          <Settings />
          <div className="iconText logout">
            <LogoutIcon
              style={{cursor: 'pointer'}}
              onClick={() => {
                dispatch(logoutCurrentUser());
                navigate('/login', {replace: false});
              }}
            />
            <span
              style={{cursor: 'pointer'}}
              className="title-sidebar"
              onClick={() => {
                dispatch(logoutCurrentUser());
                navigate('/login', {replace: false});
              }}
            >
              Logout&nbsp;account
            </span>
          </div>
        </>
      );
    } else {
      return (
        <>
          <IconTextBlock
            text="Sign&nbsp;In"
            icon={<LogoutIcon className="loginIcon" />}
            pageUrl="/login"
            clazzBlock="logout"
          />
          <IconTextBlock
            text="Sign&nbsp;Up"
            icon={<LogoutIcon className="loginIcon" />}
            pageUrl="/register"
            clazzBlock="logout"
          />
        </>
      );
    }
  }

  return (
    <div className="sideBar">
      <div className="sideBar_wrapper">
        <div className="logo-block">
          <img src={logoImg} alt="logoImg" className="logoImg" />
          <span className="title-logo">Weather app</span>
        </div>

        <div className="menu subBlocks">
          <ul className="menu-block">
            <li>
              <IconTextBlock icon={<HomeIcon />} text="Home" pageUrl="/" />
            </li>
            <li>
              <IconTextBlock icon={<MapIcon />} text="Map" pageUrl="/map" />
            </li>
            <li>
              <IconTextBlock
                icon={<ReportsIcon />}
                text="Reports"
                pageUrl="/reports"
              />
            </li>
            <li>
              <IconTextBlock
                icon={<MyWeather />}
                text="My&nbsp;Weathers"
                pageUrl={`/weather/${user?.userLogin ?? 'anonymous'}`}
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="sideBar_wrapper">
        <span className="sub-title">System</span>

        <div className="menu-block subBlocks" style={{margin: '20px 0'}}>
          {systemBlocks()}
        </div>
      </div>
    </div>
  );
};

export {MenuSideBar};
