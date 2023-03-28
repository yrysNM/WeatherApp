import "./cardWeather.scss";

const CardWeatherHeader = () => {
  return (
    <div className="card-wrapper_hBlock">
      <h3 className="title-fw500 locationTitle">Almaty</h3>
      <p className="sub-title">few clouds</p>

      <p className="tempText">-1°C</p>

      <div className="moreInfo">
        <p className="sub-title">Pressure: 1017 | Humidity: 80°C</p>
      </div>
    </div>
  );
};

export { CardWeatherHeader };
