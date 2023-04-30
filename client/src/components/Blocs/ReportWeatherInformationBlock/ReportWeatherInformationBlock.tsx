import { ReactComponent as TickAdminIcon } from "../../../assets/icons/tickIcon.svg";
import { ReactComponent as ArrowRainting } from "../../../assets/icons/arrowRainting.svg";

import cloundImg from "../../../assets/image/clound.png";
import "./reportWeatherInformationBlock.scss";

interface IReportWeather {
  likeNumber: number;
  customWeatherText: string;
  moreInformation: {
    edit?: string;
    created: string;
  };
  weatherTemp: number;
  weatherDescription: string;
  isConfirmedAdmin?: boolean;
}

const ReportWeatherInformationBlock = ({
  likeNumber,
  customWeatherText,
  moreInformation,
  weatherTemp,
  weatherDescription,
  isConfirmedAdmin = false,
}: IReportWeather) => {
  return (
    <div className="report">
      <div className="report__wrapper">
        <div className="report__wrapper_block">
          <div className="report_customBlock">
            <div className="like">
              <span className="icon" style={{ cursor: "pointer" }}>
                <ArrowRainting />
              </span>
              <span className="likeNumber">{likeNumber}</span>
              <span className="icon" style={{ cursor: "pointer" }}>
                <ArrowRainting style={{ transform: "rotate(-180deg)" }} />
              </span>
              {isConfirmedAdmin && (
                <span className="icon-edit" style={{ width: 30, height: 30 }}>
                  <TickAdminIcon />
                </span>
              )}
            </div>
            <div className="customText">
              <p>{customWeatherText}</p>
            </div>
          </div>
        </div>
        <div className="report__wrapper_block">
          <div className="report_weatherBlock">
            <div className="report_weatherIcon weatherImg">
              <img src={cloundImg} alt="weather img" />
            </div>
            <p className="report_weatherBlock-temp">{weatherTemp}° C</p>
            <span className="report_weatherBlock-descr">
              {weatherDescription}
            </span>
          </div>
        </div>
        <div className="report__moreInfo">
          {moreInformation?.edit ? (
            <span>Edited: {moreInformation.edit}</span>
          ) : null}
          <span>Created: {moreInformation.created}</span>
        </div>
      </div>
    </div>
  );
};

export { ReportWeatherInformationBlock };
