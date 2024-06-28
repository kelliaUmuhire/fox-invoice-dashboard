import { Line } from "react-chartjs-2";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ActivityChart = () => {
  const data = {
    labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
    datasets: [
      {
        label: "Dataset 1",
        data: [60000, 40000, 80000, 20000, 70000, 50000, 80000],
        borderColor: "#F97C35",
        backgroundColor: "rgba(255, 87, 34, 0.2)",
        tension: 0.4,
        borderWidth: 4,
        pointRadius: 0,
      },
      {
        label: "Dataset 2",
        data: [10000, 40000, 30000, 70000, 50000, 70000, 60000],
        borderColor: "#34C759",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        tension: 0.4,
        borderWidth: 4,
        pointRadius: 0,
      },
      {
        label: "Dataset 3",
        data: [0, 30000, 20000, 50000, 40000, 60000, 45000],
        borderColor: "#3555F9",
        backgroundColor: "rgba(33, 150, 243, 0.2)",
        tension: 0.4,
        borderWidth: 4,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          font: {
            family: "Roboto, sans-serif",
          },
          padding: 10,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true,
        },
        border: {
          display: false,
        },
        ticks: {
          callback: (value) => (value === 0 ? "0" : "$" + value / 500 + "k"),
          font: {
            family: "Roboto, sans-serif",
          },
          padding: 15,
        },
      },
    },
  };

  return (
    <div className="border-1.5 border-black shadow-main shadow-black py-5 px-2 rounded-xl mt-6">
      <div className="flex justify-between mb-4 px-3">
        <div className="text-xl font-bold">Finance Activity</div>
        <select
          name="range"
          className="rounded-lg bg-gray-100 w-fit py-1 pl-3 pr-8 appearance-none bg-no-repeat text-xs focus:outline-none bg-[url('/images/chevron-down.svg')]"
          style={{
            backgroundSize: "10px 10px",
            backgroundPosition: "calc(100% - 10px)",
          }}
        >
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Daily">Daily</option>
        </select>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default ActivityChart;
