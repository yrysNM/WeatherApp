import "./tableDayWeather.scss";

export const TableDayWeather = () => {
  return (
    <div className="tableDays">
      <div className="tableDays-wrapper">
        <div className="box">Now</div>
        <div className="box">1</div>
        <div className="box">2</div>
        <div className="box">3</div>
        <div className="box">4</div>
        <div className="box">5</div>
        <div className="box">6</div>

        {/* Table Row */}
        <div className="row">
          <div className="box">
            -1.42<sup>°</sup>
          </div>
          <div className="box">
            -1.42<sup>°</sup>
          </div>
          <div className="box">
            -1.42<sup>°</sup>
          </div>
          <div className="box">
            -1.42<sup>°</sup>
          </div>
          <div className="box">
            -1.42<sup>°</sup>
          </div>
          <div className="box">
            -1.42<sup>°</sup>
          </div>
          <div className="box">
            -1.42<sup>°</sup>
          </div>
        </div>
      </div>
    </div>
  );
};
