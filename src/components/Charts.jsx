import { Bar, Doughnut, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
);

// DashboardChart
export const DashboardChart = () => {
  const chartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "",
        data: [25, 35, 40, 29, 35, 45, 40, 39, 15, 20, 35, 30],
        // backgroundColor: "#34B0F5",
        backgroundColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) return null;

          const gradient = ctx.createLinearGradient(
            0,
            chartArea.bottom,
            0,
            chartArea.top
          );

          gradient.addColorStop(0.1, "#034175");
          gradient.addColorStop(1, "#34B0F5");

          return gradient;
        },

        borderRadius: 8,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: { display: false },
      title: { display: false },
    },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: "#eee" }, suggestedMax: 50 },
    },
  };

  return (
    <div className="mb-2 bg-gray-50 rounded-md ">
      <div className="h-80 w-full">
        {/* chart placeholder */}
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

// MembersChart.jsx
export const MembersChart = ({ value }) => {
  const data = {
    labels: ["Completed", "Remaining", "Pending"],
    datasets: [
      {
        data: [30, value, 100 - value],
        backgroundColor: ["#37B7FE", "#034175", "#F2F5F7"],
        borderWidth: 0,
        cutout: "70%",
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Title row with blue dot */}
      <div className="flex items-center justify-center gap-2">
        <span className="h-3 w-3 rounded-full bg-[#37B7FE]" />
        <span className="text-base font-semibold text-[#034175]">Members</span>
      </div>

      <div className="relative w-40 h-40">
        <Doughnut data={data} options={options} />
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold">{value}%</span>
          <span className="mt-1 text-xs text-gray-400 text-center">
            Total New<br/>Members
          </span>
        </div>
      </div>
    </div>
  );
};

// RevenueChart.jsx
export const RevenueChart = ({ className }) => {
  const data = {
    labels: ["Last Month", "Current Month", "Other"],
    datasets: [
      {
        data: [55, 20, 30], // change these to your real numbers
        backgroundColor: ["#003A78", "#37B7FE", "#EDF4FF"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: { boxWidth: 12, font: { size: 10 } },
        tooltip: { enabled: true },
      },
      responsive: true,
      maintainAspectRatio: false,
    },
  };

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {/* Title row with blue dot */}
      <div className="flex items-center justify-center gap-2">
        <span className="h-3 w-3 rounded-full bg-[#37B7FE]" />
        <span className="text-base font-semibold text-[#034175]">
          Total Revenue
        </span>
      </div>

      {/* Chart */}
      <div className="w-40 h-40">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};
