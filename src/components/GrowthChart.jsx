import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";
import React from "react";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler);

const options = {
  responsive: true,
  maintainAspectRatio: false, // fit container
  plugins: { legend: { display: false } },
  scales: {
    x: { grid: { display: false } },
    y: { beginAtZero: true },
  },
};

// 4 months data
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr","May"],
  datasets: [
    {
      label: "Revenue Growth",
      data: [1200, 1900, 3000, 2500,2000],
      fill: true,
      tension: 0.4,
      backgroundColor: "rgba(40,116,240,0.12)",
      borderColor: "#2874f0",
      borderWidth: 3,
      pointBackgroundColor: "#fff",
      pointBorderColor: "#2874f0",
      pointRadius: 5,
    },
  ],
};

export default function GrowthChart() {
  return (
    <div className="flex justify-end items-center h-full">
      {/* Increased width & height by ~25% */}
      <div style={{ width: "512px", height: "275px" }}>
        <Line options={options} data={data} />
      </div>
    </div>
  );
}
