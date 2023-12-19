
import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import styles from "./line-chart.module.css"
const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "",
      backgroundColor: "#2185f8",
      borderColor: "#2185f8",
      data: [0, 10, 5, 2, 20, 30, 45, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const LineChart = () => {
  return (
    <div className={styles.chartContainer}>
      <Line className={styles.chart} data={data} />
    </div>
  );
};

export default LineChart;