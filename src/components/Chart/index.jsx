import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";


const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "left",
    },
    title: {
      display: false,
      text: "Completed Tasks",
      color: '#0abdc6',
    },
    chartAreaBorder: {
        display: false,
    }
  },
};

function Chart({ completedTodos, pendingTodos }) {

  const data = {
    labels: ["Done", "Pending"],
    datasets: [
      {
        label: "Completed",
        data: [completedTodos, pendingTodos],
        backgroundColor: ['#0abdc6', '#ea00d9'],
        borderWidth: 0,
      },
    ],
  };

  return (
  <div>
      <Doughnut className="chart" options={options} data={data} />
  </div>
  );
}

export default Chart;