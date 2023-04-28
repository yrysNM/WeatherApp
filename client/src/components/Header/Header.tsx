import { CustomDate, cusomDate } from "../../utils/helpers/CustomDate";

import { ReactComponent as SearchIcon } from "../../assets/icons/searchIcon.svg";
import { ReactComponent as BellIcon } from "../../assets/icons/bellIcon.svg";
import { ReactComponent as ProfileIcon } from "../../assets/icons/profileIcon.svg";
import "./header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header_date">
        <h3 className="dateMonth">
          {CustomDate.getMonthName() + " " + new Date().getFullYear()}
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
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? "active-header" : "")}
        >
          <div className="header_data-block">
            <ProfileIcon className="icon-standart" />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export { Header };
