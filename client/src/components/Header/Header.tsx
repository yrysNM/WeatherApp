import classNames from "classnames";
import { useState } from "react";

import { CustomDate, cusomDate } from "../../utils/helpers/CustomDate";
import { Modal } from "../Modal";
import { Profile } from "../Profile";

import { ReactComponent as SearchIcon } from "../../assets/icons/searchIcon.svg";
import { ReactComponent as BellIcon } from "../../assets/icons/bellIcon.svg";
import { ReactComponent as ProfileIcon } from "../../assets/icons/profileIcon.svg";
import "./header.scss";

const Header = () => {
  const [openModalProfile, setOpenModalProfile] = useState(false);

  return (
    <>
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

          <div
            className={classNames("header_data-block", {
              "active-header": openModalProfile,
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

export { Header };
