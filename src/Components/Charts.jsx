import React from "react";
import { Chart } from "react-google-charts";

const options = {
  title: "Last 6 months (income)",
  legend: "none",
  colors: ["#2c50ef", "#276419"],
  pointSize: 10,
  animation: {
    duration: 1000,
    easing: "linear",
    startup: true,
  },
};

const data = [
  ["name", "Total"],
  ["January", 1200],
  ["February", 2100],
  ["March", 800],
  ["April", 1600],
  ["May", 900],
  ["June", 1700],
];

const Charts = () => {
  return (
    <div className="chart-container">
      <Chart
        chartType="AreaChart"
        data={data}
        options={options}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default Charts;
