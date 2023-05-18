import { memo, useCallback, useState } from "react";
import classNames from "classnames";

import { useToggle } from "../../hooks/toggle.hook";
import { useAppDispatch } from "../../hooks/redux.hook";
import {
  getCelsius,
  getDefaultKelvin,
  getFarenheit,
} from "../../redux/modules/currentCityWeatherSlice";

import { ReactComponent as TickIcon } from "../../assets/icons/tickIcon.svg";
import { ReactComponent as SettingIcon } from "../../assets/icons/settingsIcon.svg";
import { ReactComponent as DropIcon } from "../../assets/icons/dropIcon.svg";

import "./settings.scss";

const Settings = () => {
  // console.log("settings");
  const dispatch = useAppDispatch();
  const [dropBlock, dropBlockToggle] = useToggle(false);
  const [changeTempList, setChangeTemList] = useState({
    temp: "Celsius °C",
    isActive: true,
  });

  const handleChangeTemp = useCallback(
    (tempName: string, isActiveValue: boolean) => {
      setChangeTemList(() => ({
        temp: tempName,
        isActive: isActiveValue,
      }));
    },
    [changeTempList.isActive]
  );

  return (
    <>
      <div
        className="settings"
        style={{
          gridTemplate: dropBlock
            ? "repeat(2, 1fr) / repeat(2, 1fr)"
            : "repeat(1, 1fr) / repeat(2, 1fr)",
          rowGap: dropBlock ? "20px" : 0,
        }}
      >
        <div className="settings-block">
          <span className="icon" onClick={dropBlockToggle}>
            <SettingIcon />
          </span>
          <span className="settings-text" onClick={dropBlockToggle}>
            Settings
          </span>
        </div>
        <span className="icon" onClick={dropBlockToggle}>
          <DropIcon />
        </span>
        <div
          style={{
            marginTop: "-20px",
            overflow: "hidden",
            height: dropBlock ? "auto" : "0",
            gridColumn: "1 / 3",
          }}
        >
          <TemperatureListComponent
            temp="Celsius °C"
            isTicked={changeTempList}
            handleChange={() => {
              handleChangeTemp("Celsius °C", true);
              dispatch(getCelsius());
            }}
          />
          <TemperatureListComponent
            temp="Fahrenheit °F"
            isTicked={changeTempList}
            handleChange={() => {
              handleChangeTemp("Fahrenheit °F", true);
              dispatch(getFarenheit());
            }}
          />
          <TemperatureListComponent
            temp="Kelvin °K"
            isTicked={changeTempList}
            handleChange={() => {
              handleChangeTemp("Kelvin °K", true);
              dispatch(getDefaultKelvin());
            }}
          />
        </div>
      </div>
    </>
  );
};

interface ITempList {
  temp: "Celsius °C" | "Fahrenheit °F" | "Kelvin °K";
  isTicked: {
    temp: string;
    isActive: boolean;
  };
  handleChange: (tempName: string, isActiveValue: boolean) => void;
}

const TemperatureListComponent = memo(
  ({ temp, isTicked, handleChange }: ITempList) => {
    // console.log("rerender");
    return (
      <div
        className={classNames("tempList", {
          "tempList-active":
            isTicked.isActive && temp.lastIndexOf(isTicked.temp) !== -1,
        })}
      >
        <span
          className="tempList-text"
          onClick={() => handleChange(temp, true)}
        >
          {temp}
        </span>
        {isTicked.isActive && temp.lastIndexOf(isTicked.temp) !== -1 && (
          <TickIcon />
        )}
      </div>
    );
  }
);

export { Settings };
