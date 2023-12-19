
import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import styles from "./line-chart.module.css"

const BarChart = () => {
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "",
        backgroundColor: "#2185f8",
        borderColor: "#2185f8",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };
  return (
    <div className={styles.chartContainer}>
      <Bar data={data} className={styles.chart}
      height="150px"
      width="300px"
      options={{ maintainAspectRatio: false }} 
      />
    </div>
  );
};

export default BarChart;