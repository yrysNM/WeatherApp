import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import { ContentLayout } from "../layouts/contentLayout";
import "./averageWeekTemperature.scss";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const labels = ["Week 1", "Week 2", "Week 3", "Week 4"];

export const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => faker.datatype.number({ min: 10, max: 50 })),
      borderColor: "#172E52",
      backgroundColor: "rgb(252, 252, 252)",
      tension: 0.1,
      pointRadius: 0,
      pointHoverBackgroundColor: "#172E52",
      pointHoverRadius: 10,
    },
  ],
};

export const AverageWeekTemperature = () => {
  return (
    <ContentLayout title="Average Weekly Temperature">
      <div className="static">
        <Line options={options} data={data} />
      </div>
    </ContentLayout>
  );
};
