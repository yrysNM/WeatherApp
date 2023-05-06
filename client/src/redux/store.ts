import {configureStore} from '@reduxjs/toolkit';

import currentUser from './modules/currentUserSlice';
import cityWeather from './modules/currentCityWeatherSlice';
import weatherDailyForecast from './modules/weatherDailyForecastSlice';

const store = configureStore({
  reducer: {currentUser, cityWeather, weatherDailyForecast},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: import.meta.env.DEV === true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
