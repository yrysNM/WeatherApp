import {configureStore} from '@reduxjs/toolkit';

import currentUser from './modules/currentUserSlice';
import cityWeather from './modules/currentCityWeatherSlice';
import weatherDailyForecast from './modules/weatherDailyForecastSlice';
import cityChange from './modules/cityChangeSlice';
import {allReportsApi} from './services/allReports';
import {userReportsApi} from './services/userReports';

const store = configureStore({
  reducer: {
    currentUser,
    cityWeather,
    weatherDailyForecast,
    cityChange,
    [allReportsApi.reducerPath]: allReportsApi.reducer,
    [userReportsApi.reducerPath]: userReportsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false}).concat(
      allReportsApi.middleware,
      userReportsApi.middleware
    ),
  devTools: import.meta.env.DEV === true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
