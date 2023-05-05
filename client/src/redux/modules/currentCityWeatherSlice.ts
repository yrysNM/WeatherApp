import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchCurrentCityWeather } from "../../api/weather";

import { ICurrentCityWeather } from "../../Interfaces/ICurrentCityWeather";

const initialState: ICurrentCityWeather = {
  base: "",
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
  name: "",
  sys: {
    country: "",
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
  name: "cityWeather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCurrentCityWeather.fulfilled, (state, action) => {
      return { ...state, ...action.payload.data };
    });
  },
});

const { reducer } = currentCityWeatherSlice;

export default reducer;
