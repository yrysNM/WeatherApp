import {createSlice} from '@reduxjs/toolkit';
import {IWeatherCityDays} from '../../Interfaces/ICurrentCityWeather';
import {fetchWeatherDaysTheCity} from '../../api/weather';

const initialState: IWeatherCityDays = {
  city: {
    coord: {
      lat: 0,
      lon: 0,
    },
    country: '',
    id: 0,
    name: '',
    population: 0,
    sunrise: 0,
    sunset: 0,
    timezone: 0,
  },
  cnt: 0,
  cod: '',
  list: [],
  message: 0,
};

const weatherDailyForecastSlice = createSlice({
  name: 'weatherDailyForecast',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherDaysTheCity.fulfilled, (state, action) => {
      Object.assign(state, {...action.payload.data});
    });
  },
});

const {reducer} = weatherDailyForecastSlice;

export default reducer;
