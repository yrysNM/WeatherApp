import { CustomDate, cusomDate } from "../../utils/helper/CustomDate";

import { ReactComponent as SearchIcon } from "../../../public/assets/icons/searchIcon.svg";
import { ReactComponent as BellIcon } from "../../../public/assets/icons/bellIcon.svg";
import { ReactComponent as ProfileIcon } from "../../../public/assets/icons/profileIcon.svg";
import "./header.scss";

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
        <div className="header_data-block">
          <ProfileIcon className="icon-standart" />
        </div>
      </div>
    </div>
  );
};

export { Header };
