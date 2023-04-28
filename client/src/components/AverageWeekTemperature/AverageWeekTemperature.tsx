import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import { ContentLayout } from "../layouts/contentLayout";

import "./averageWeekTemperature.scss";

const data = [
  { name: "", value: 0 },
  { name: "week 1", value: 20 },
  { name: "week 2", value: 30 },
  { name: "week 3", value: 10 },
  { name: "week 4", value: 27 },
];

export function AverageWeekTemperature() {
  return (
    <ContentLayout title="Average Weekly Temperature">
      <div className="static">
        <ResponsiveContainer width="100%" height={450}>
          <AreaChart width={600} height={450} data={data}>
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
              dataKey="value"
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
