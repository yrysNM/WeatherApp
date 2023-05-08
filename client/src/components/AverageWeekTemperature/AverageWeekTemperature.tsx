import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import {useEffect, useState} from 'react';

import {useAppSelector} from '../../hooks/redux.hook';
import {ContentLayout} from '../layouts/contentLayout';

import './averageWeekTemperature.scss';

export function AverageWeekTemperature() {
  const {list} = useAppSelector((state) => state.weatherDailyForecast);
  const [tempEachDays, setTempEachDays] =
    useState<
      {name: string; kelvin: number; celsius: number; fahrenheit: number}[]
    >();

  useEffect(() => {
    const filterList = list.filter(
      (tempData) => new Date(tempData.dt_txt).getHours() === 12
    );

    setTempEachDays([
      ...filterList.map((data) => ({
        name: String(new Date(data.dt_txt).getDate()),
        kelvin: data.main.temp,
        celsius: Math.round(data.main.temp - 273.15),
        fahrenheit: Math.round(1.8 * (data.main.temp - 273.15) + 32),
      })),
    ]);
  }, [list]);

  return (
    <ContentLayout title="Average Days Temperature">
      <div className="static">
        <ResponsiveContainer width="100%" height={450}>
          <AreaChart width={600} height={450} data={tempEachDays}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#172E52" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#172E52" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.5} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="4 4"
              horizontal={true}
              vertical={false}
            />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="kelvin"
              stroke="#172E52"
              strokeWidth={4}
              fillOpacity={1}
              fill="url(#colorUv)"
              activeDot={{r: 8}}
            />
            <Area
              type="monotone"
              dataKey="celsius"
              stroke="#172E52"
              strokeWidth={4}
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="fahrenheit"
              stroke="#172E52"
              strokeWidth={4}
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </ContentLayout>
  );
}
