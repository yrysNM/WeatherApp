import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {fetchCurrentCityWeather} from '../../api/weather';

import {ICurrentCityWeather} from '../../Interfaces/ICurrentCityWeather';

interface ICityWeather extends ICurrentCityWeather {
  changeTemp: {
    feels_like: string;
    temp: string;
  };
}

const initialState: ICityWeather = {
  changeTemp: {
    feels_like: '',
    temp: '',
  },
  base: '',
  clouds: {
    all: 0,
  },
  cod: 0,
  coord: {
    lat: 0,
    lon: 0,
  },
  dt: 0,
  id: 0,
  main: {
    feels_like: 0,
    grnd_level: 0,
    humidity: 0,
    pressure: 0,
    sea_level: 0,
    temp: 0,
    temp_max: 0,
    temp_min: 0,
  },
  name: '',
  sys: {
    country: '',
    sunrise: 0,
    sunset: 0,
  },
  timezone: 0,
  visibility: 0,
  weather: [],
  wind: {
    deg: 0,
    gust: 0,
    speed: 0,
  },
};

const currentCityWeatherSlice = createSlice({
  name: 'cityWeather',
  initialState,
  reducers: {
    getCelsius: (state) => {
      const convertKelvinToCelsuisTemp = Math.round(state.main.temp - 273.15);
      const convertKelvinToCelsuisFeels_like = Math.round(
        state.main.feels_like - 273.15
      );
      state.changeTemp = {
        temp: convertKelvinToCelsuisTemp + '° C',
        feels_like: convertKelvinToCelsuisFeels_like + '° C',
      };
    },
    getFarenheit: (state) => {
      const convertKelvinToFarenheitTemp = Math.round(
        1.8 * (state.main.temp - 273.15) + 32
      );
      const convertKelvinToFarenheitFeels_like = Math.round(
        1.8 * (state.main.feels_like - 273.15) + 32
      );

      state.changeTemp = {
        temp: convertKelvinToFarenheitTemp + '° F',
        feels_like: convertKelvinToFarenheitFeels_like + '° F',
      };
    },
    getDefaultKelvin: (state) => {
      state.changeTemp = {
        temp: state.main.temp + '° K',
        feels_like: state.main.feels_like + '° K',
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCurrentCityWeather.fulfilled, (state, action) => {
      const {main} = action.payload.data;
      let cp = {changeTemp: {...state.changeTemp}};

      cp = {
        changeTemp: {
          temp: Math.round(main.temp - 273.15) + '° C',
          feels_like: Math.round(main.feels_like - 273.15) + '° C',
        },
      };

      return {...state, ...action.payload.data, ...cp};
    });
  },
});

const {actions, reducer} = currentCityWeatherSlice;

export const {getCelsius, getFarenheit, getDefaultKelvin} = actions;

export default reducer;
