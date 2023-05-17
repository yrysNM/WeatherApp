import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {IWeatherReportsByUser} from '../../Interfaces/IUser';
import type {typeAllReports} from './allReports';
import {getItem} from '../../helpers/persistanceStorage';

export const userReportsApi = createApi({
  reducerPath: 'userReportsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_JAVA_API_URL}`,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${getItem('accessToken')}`);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUserReports: builder.query<IWeatherReportsByUser[], typeAllReports>({
      query: ({hour, userId}) => {
        return {
          url: `/reports`,
          params: {hour, userId},
        };
      },
    }),
  }),
});

export const {useGetUserReportsQuery} = userReportsApi;
