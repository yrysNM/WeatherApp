import { IconTextBlock } from "../Blocs";
import { useAppSelector } from "../../hooks/redux.hook";

import { ReactComponent as HomeIcon } from "../../assets/icons/homeIcon.svg";
import { ReactComponent as MapIcon } from "../../assets/icons/mapIcon.svg";
import { ReactComponent as LocationIcon } from "../../assets/icons/locationIcon.svg";
import { ReactComponent as CalendarIcon } from "../../assets/icons/calendarIcon.svg";
import { ReactComponent as SettingIcon } from "../../assets/icons/settingsIcon.svg";
import { ReactComponent as LogoutIcon } from "../../assets/icons/logoutIcon.svg";

import logoImg from "../../assets/image/logoImg.png";

import "./menuSideBar.scss";

const MenuSideBar = () => {
  const { isLogged } = useAppSelector((state) => state.currentUser);

  function systemBlocks() {
    if (isLogged) {
      return (
        <>
          <IconTextBlock icon={<SettingIcon />} text={"Setting"} />
          <IconTextBlock
            icon={<LogoutIcon />}
            text="Logout&nbsp;account"
            clazzBlock="logout"
          />
        </>
      );
    } else {
      return (
        <>
          <IconTextBlock
            text="Sign&nbsp;In"
            icon={<LogoutIcon className="loginIcon" />}
            pageUrl="login"
            clazzBlock="logout"
          />
          <IconTextBlock
            text="Sign&nbsp;Up"
            icon={<LogoutIcon className="loginIcon" />}
            pageUrl="register"
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
              <IconTextBlock
                icon={<HomeIcon />}
                text="Dashboard"
                pageUrl="main"
              />
            </li>
            <li>
              <IconTextBlock icon={<MapIcon />} text="Map" pageUrl="map" />
            </li>
            <li>
              <IconTextBlock
                icon={<LocationIcon />}
                text="Saved&nbsp;Location"
                pageUrl="location"
              />
            </li>
            <li>
              <IconTextBlock
                icon={<CalendarIcon />}
                text="Calendar"
                pageUrl="calecdar"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="sideBar_wrapper">
        <span className="sub-title">System</span>

        <div className="menu-block subBlocks" style={{ margin: "20px 0" }}>
          {systemBlocks()}
        </div>
      </div>
    </div>
  );
};

export { MenuSideBar };
