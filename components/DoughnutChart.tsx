"use client";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

import React from "react";

const DoughnutChart = ({
  accounts,
}: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: "Banks",
        data: [1250, 2500, 3750],
        backgroundColor: ["#0747b6", "#2265d8", "2f91fa"],
      },
    ],
  };

  return <Doughnut data={[]} />;
};

export default DoughnutChart;
