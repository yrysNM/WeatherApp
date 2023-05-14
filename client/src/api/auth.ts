import {createAsyncThunk} from '@reduxjs/toolkit';
import {axios} from './axios';
import type {IUserLogin} from '../Interfaces/IUser';

interface IAuthenticate {
  email: string;
  password: string;
}

interface IRegister extends IAuthenticate {
  username: string;
}

export const fetchUserLogin = createAsyncThunk<
  {data: IUserLogin},
  IAuthenticate
>('currentUser/fetchUserLogin', async (bodyData) => {
  return axios.post(`/auth/authenticate`, bodyData);
});

export const fetchUserRegister = createAsyncThunk<
  {data: IUserLogin},
  IRegister
>('currentUser/', async (bodyUserData) => {
  return axios.post(`/auth/register`, bodyUserData);
});
