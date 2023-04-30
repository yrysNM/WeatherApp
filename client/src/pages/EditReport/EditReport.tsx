import { WeatherDataDescription, WeatherDataTypes } from "../AddReport";

import "./editReport.scss";

export const EditReport = () => {
  return (
    <div className="edit-report">
      <p className="title-justFw500 title_page">Edit report</p>
      <div className="edit-report__headInfo">
        <p className="edit-report__headInfo_text">Friday, Aprip 30 2023</p>
        <p className="edit-report__headInfo_text">Almaty, Kazakhstan</p>
      </div>
      <WeatherDataTypes />
      <WeatherDataDescription />
      <button className="btn btn-edit" style={{ marginRight: 0 }}>
        <span className="signInUpBtnSpan">Save</span>
      </button>
    </div>
  );
};
