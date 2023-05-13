import {createAsyncThunk} from '@reduxjs/toolkit';
import {axios} from './axios';
import {
  ICurrentCityWeather,
  IWeatherCityDays,
  List,
} from '../Interfaces/ICurrentCityWeather';

export const fetchCurrentCityWeather = createAsyncThunk<
  {data: ICurrentCityWeather},
  {cityName?: string}
>('weather/fetchCurrentCityWeather', async ({cityName = 'Almaty'}) => {
  return axios.get(`/weather/city/${cityName}`);
});

export const fetchWeatherDaysTheCity = createAsyncThunk<
  {data: IWeatherCityDays},
  {lon: number; lat: number}
>('weather/fetchWeatherDaysCity', async ({lon, lat}) => {
  return axios.get(`/weather/forecast?lon=${lon}&lat=${lat}`);
});
