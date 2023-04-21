import "./weatherComponent.scss";

const WeatherComponent = () => {
  return (
    <div className="weather">
      <div className="weather_head">
        <div>
          <h3>Name Surname</h3>
          <span className="weather-cityTitle sub-title">Almaty</span>
        </div>
        <div>
          <span>08:54 am</span>
        </div>
      </div>
    </div>
  );
};

export { WeatherComponent };
