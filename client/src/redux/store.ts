import { configureStore } from "@reduxjs/toolkit";

import currentUser from "./modules/currentUserSlice";

const store = configureStore({
  reducer: { currentUser },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: import.meta.env.DEV === true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
