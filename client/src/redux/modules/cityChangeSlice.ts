import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';

interface ICityChange {
  location: {
    city: string;
    country: string;
  };
}

const initialState: ICityChange = {
  location: {city: 'Almaty', country: 'Kazakhstan'},
};

const cityChangeSlice = createSlice({
  name: 'cityChange',
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<ICityChange>) => {
      state.location = action.payload.location;
    },
  },
});

const {actions, reducer} = cityChangeSlice;

export default reducer;

export const {changeCity} = actions;
