import styles from "./PieChart.module.css";
import { Pie } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(CategoryScale, ArcElement, Title, Tooltip, Legend);

export default function PieChart() {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "Scale $",
          data: [12, 23, 22, 11, 31, 8],
          borderColor: [
            "rgb(153,162,23,0.4)",
            "rgb(53,62,235,0.4)",
            "rgb(53,162,135,0.4)",
            "rgb(53,12,35,0.4)",
            "rgb(3,162,235,0.4)",
            "rgb(153,12,25,0.4)",
          ],

          backgroundColor: [
            "rgb(153,162,23,0.4)",
            "rgb(53,62,235,0.4)",
            "rgb(53,162,135,0.4)",
            "rgb(53,12,35,0.4)",
            "rgb(3,162,235,0.4)",
            "rgb(153,12,25,0.4)",
          ],
        },
      ],
    });

    setChartOptions({
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Daily Revenue",
        },
      },
      maintainAspectRation: false,
      responsive: true,
    });
  }, []);

  return (
    <>
      <Pie
        data={chartData}
        options={chartOptions}
        style={{ width: "50px", height: "50px" }}
      />
    </>
  );
}
