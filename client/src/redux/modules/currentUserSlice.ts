import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface IUser {
  user: {
    username: string;
    email: string;
    token: string;
  } | null;
}

interface ICurrentUser extends IUser {
  isLogged: boolean;
  errorMessage: string;
  userLoading: "idle" | "loading" | "error";
}

const initialState: ICurrentUser = {
  isLogged: false,
  errorMessage: "",
  user: null,
  userLoading: "idle",
};

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    getCurrentUserStart: (state) => {
      state.userLoading = "loading";
      state.isLogged = false;
    },
    getCurrentUserSuccess: (state, action: PayloadAction<ICurrentUser>) => {
      state.user = action.payload.user;
      state.isLogged = true;
      state.userLoading = "idle";
    },
  },
});

const { actions, reducer } = currentUserSlice;

export default reducer;

export const { getCurrentUserStart, getCurrentUserSuccess } = actions;
