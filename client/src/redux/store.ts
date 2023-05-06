import { configureStore } from "@reduxjs/toolkit";

import currentUser from "./modules/currentUserSlice";
import cityWeather from "./modules/currentCityWeatherSlice";

const store = configureStore({
  reducer: { currentUser, cityWeather },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: import.meta.env.DEV === true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
