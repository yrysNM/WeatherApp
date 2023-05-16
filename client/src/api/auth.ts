import {createAsyncThunk} from '@reduxjs/toolkit';
import {axios} from './axios';
import type {IUserData, IUserLogin} from '../Interfaces/IUser';
import {getItem} from '../helpers/persistanceStorage';

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

export const fetchUserData = createAsyncThunk<
  {data: IUserData},
  {email: string}
>('currentUser/fetchUserData', async ({email}) => {
  return await fetch(
    `${
      import.meta.env.VITE_BASE_JAVA_API_URL
    }/users?userEmail=${encodeURIComponent(email)}`,
    {
      headers: {
        Authorization: `Bearer ${getItem('accessToken')}`,
      },
    }
  )
    .then((res) => res.json())
    .then((res) => ({
      data: res,
    }));
});
