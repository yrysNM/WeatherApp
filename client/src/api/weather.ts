import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "./axios";
import { ICurrentCityWeather } from "../Interfaces/ICurrentCityWeather";

export const fetchCurrentCityWeather = createAsyncThunk<
  { data: ICurrentCityWeather },
  { cityName?: string }
>("weather/fetchCurrentCityWeather", async ({ cityName = "Almaty" }) => {
  return axios.get(`/weather/${cityName}`);
});
