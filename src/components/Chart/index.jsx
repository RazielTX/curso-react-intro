import { Chart as ChartJS } from "chart.js/auto";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { TodoContext } from "../../TodoContext";

// import ChartLoading from './ChartLoading'

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "left",
    },
    title: {
      display: false,
      text: "Completed Tasks",
      color: "#0abdc6",
    },
    chartAreaBorder: {
      display: false,
    },
  },
};

function Chart() {
  const { completedTodos, pendingTodos, loading } =
    React.useContext(TodoContext);

  const data = {
    labels: ["Done", "Pending"],
    datasets: [
      {
        label: "Completed",
        data: [completedTodos, pendingTodos],
        backgroundColor: ["#0abdc6", "#ea00d9"],
        borderWidth: 0,
      },
    ],
  };

  const dataLoading = {
    labels: [],
    datasets: [
      {
        label: "Completed",
        data: [1],
        backgroundColor: ["rgba(119, 119, 119, 1) 0%"],
        borderWidth: 0,
      },
    ],
  };

  return loading ? (
    <>
      <Doughnut className="chart" options={options} data={dataLoading} />
    </>
  ) : (
    <>
      <Doughnut className="chart" options={options} data={data} />
    </>
  );
}

export default Chart;
