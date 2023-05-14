import {useState, memo} from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import {useAppSelector} from '../../hooks/redux.hook';

import {ReactComponent as TickIcon} from '../../assets/icons/tickIcon.svg';
import './map.scss';
import {LatLngExpression} from 'leaflet';

type TLayer = {
  type: string;
  isActive: boolean;
};

export const Map = () => {
  const {coord, changeTemp} = useAppSelector((state) => state.cityWeather);

  const [dataLayer, setDataLayer] = useState<TLayer>({
    type: 'precipitation_new',
    isActive: true,
  });

  function changeType(type: string) {
    setDataLayer((dataLayer) => ({
      type: type,
      isActive: true,
    }));
  }

  return (
    <>
      <MapContainer
        center={coord as unknown as LatLngExpression}
        zoom={5}
        scrollWheelZoom={false}
        style={{
          height: '100vh',
          marginTop: 15,
          borderRadius: 5,
          position: 'relative',
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="Map data © <a href='https://tile.openweathermap.org'>OpenWeatherApp</a> contributors"
        />
        <TileLayer
          url={`https://tile.openweathermap.org/map/${
            dataLayer.type
          }/{z}/{x}/{y}.png?appid=${import.meta.env.VITE_WEATHER_API}`}
        />

        {coord && (
          <Marker position={[coord.lat, coord.lon]}>
            <Popup>Temp: {changeTemp.temp}</Popup>
          </Marker>
        )}
        <div className="selectors">
          <MapSelectorBlock
            typeName="Precipitation"
            weatherType={dataLayer}
            onChangeType={changeType}
          />
          <MapSelectorBlock
            typeName="Clouds"
            weatherType={dataLayer}
            onChangeType={changeType}
          />
          <MapSelectorBlock
            typeName="Wind"
            weatherType={dataLayer}
            onChangeType={changeType}
          />
        </div>
      </MapContainer>
    </>
  );
};

const MapSelectorBlock = ({
  typeName,
  weatherType,
  onChangeType,
}: {
  typeName: string;
  weatherType: TLayer;
  onChangeType: (type: string) => void;
}) => {
  const type = typeName.toLowerCase() + '_new';

  return (
    <div
      className="selectors-block"
      onClick={(e) => {
        e.stopPropagation();
        onChangeType(type);
      }}
    >
      <span>{typeName}</span>
      {weatherType.isActive && weatherType.type === type && <TickIcon />}
    </div>
  );
};
