import { IconTextBlock } from "../Blocs";

import { ReactComponent as HomeIcon } from "../../../public/assets/icons/homeIcon.svg";
import { ReactComponent as MapIcon } from "../../../public/assets/icons/mapIcon.svg";
import { ReactComponent as LocationIcon } from "../../../public/assets/icons/locationIcon.svg";
import { ReactComponent as CalendarIcon } from "../../../public/assets/icons/calendarIcon.svg";
import { ReactComponent as SettingIcon } from "../../../public/assets/icons/settingsIcon.svg";
import { ReactComponent as LogoutIcon } from "../../../public/assets/icons/logoutIcon.svg";

import logoImg from "../../../public/assets/image/logoImg.png";

import "./menuSideBar.scss";

const MenuSideBar = () => {
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
                isActive={true}
              />
            </li>
            <li>
              <IconTextBlock icon={<MapIcon />} text="Map" />
            </li>
            <li>
              <IconTextBlock icon={<LocationIcon />} text="Saved Location" />
            </li>
            <li>
              <IconTextBlock icon={<CalendarIcon />} text="Calendar" />
            </li>
          </ul>
        </div>
      </div>
      <div className="sideBar_wrapper">
        <span className="sub-title">System</span>

        <div className="menu-block subBlocks" style={{ margin: "20px 0" }}>
          <IconTextBlock
            icon={<SettingIcon />}
            text="Setting"
            isActive={false}
          />
          <IconTextBlock
            icon={<LogoutIcon />}
            text="Logout account"
            clazzBlock="logout"
          />
        </div>
      </div>
    </div>
  );
};

export { MenuSideBar };
