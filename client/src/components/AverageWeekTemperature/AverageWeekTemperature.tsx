// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Line } from "react-chartjs-2";
// import { faker } from "@faker-js/faker";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// import { ContentLayout } from "../layouts/contentLayout";
// import "./averageWeekTemperature.scss";

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       display: false,
//     },
//     title: {
//       display: false,
//     },
//   },
// };

// const labels = ["Week 1", "Week 2", "Week 3", "Week 4"];

// export const data = {
//   labels,
//   datasets: [
//     {
//       data: labels.map(() => faker.datatype.number({ min: 10, max: 50 })),
//       borderColor: "#172E52",
//       backgroundColor: "rgb(252, 252, 252)",
//       tension: 0.5,
//       pointRadius: 5,
//       pointHoverBackgroundColor: "#172E52",
//       pointHoverRadius: 10,
//     },
//   ],
// };

// /**
//  * @featureChange -> recharts
//  * @returns JSX.ELEMENT
//  */
// export const AverageWeekTemperature = () => {
//   return (
//     <ContentLayout title="Average Weekly Temperature">
//       <div className="static">
//         <Line options={options} data={data} />
//       </div>
//     </ContentLayout>
//   );
// };

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "A", value: 10 },
  { name: "B", value: 20 },
  { name: "C", value: 30 },
];

export function AverageWeekTemperature() {
  return (
    <LineChart width={500} height={300} data={data}>
      <defs>
        <filter id="boxShadow" x="-20%" y="-20%" width="150%" height="150%">
          <feOffset result="offOut" in="SourceAlpha" dx="2" dy="2" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="2" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        </filter>
      </defs>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="value"
        stroke="#8884d8"
        strokeWidth={2}
        filter="url(#boxShadow)"
      />
    </LineChart>
  );
}
