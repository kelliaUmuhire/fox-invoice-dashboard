import { Line } from "react-chartjs-2";
import "chart.js/auto";

const DashboardGraph = () => {
  const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Sample Data",
        // data: [500, 600, 700, 1087, 850, 900, 950],
        data: [10, 400, 200, 1087, 850, 600, 700],
        fill: false,
        backgroundColor: "#4A5568",
        borderColor: "#B2EDD3",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += `$${context.parsed.y.toFixed(2)}`;
            }
            return label;
          },
        },
        backgroundColor: "#4A5568",
        titleColor: "white",
        bodyColor: "white",
        displayColors: false,
        font: {
          family: "Roboto, sans-serif",
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
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
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="relative w-full bg-white p-4 rounded-lg">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default DashboardGraph;
