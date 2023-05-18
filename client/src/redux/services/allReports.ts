import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {IWeatherReportsByUser} from '../../Interfaces/IUser';

export type typeAllReports = {hour: number; userId?: number};

export const allReportsApi = createApi({
  reducerPath: 'allReportsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_JAVA_API_URL}`,
  }),
  endpoints: (builder) => ({
    getAllReports: builder.query<IWeatherReportsByUser[], typeAllReports>({
      query: ({hour, userId}) => {
        return {
          url: `/reports/all`,
          params: {hour, userId},
        };
      },
    }),
  }),
});

export const {useGetAllReportsQuery} = allReportsApi;
