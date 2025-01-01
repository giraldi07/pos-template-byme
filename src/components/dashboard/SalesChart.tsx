// src/components/dashboard/SalesChart.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const chartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Sales',
      data: [1200, 1900, 1500, 2100, 1800, 2500, 2200],
      borderColor: 'rgb(59, 130, 246)',  // Tailwind primary color
      backgroundColor: 'rgba(59, 130, 246, 0.2)',  // Lighter for background
      tension: 0.4,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Weekly Sales Overview',
      color: 'var(--text-color)',  // Ensures text color works with dark mode
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        color: 'var(--text-color)',  // Text color for y-axis
      },
    },
    x: {
      ticks: {
        color: 'var(--text-color)',  // Text color for x-axis
      },
    },
  },
};

const SalesChart: React.FC = () => {
  return <Line data={chartData} options={chartOptions} />;
};

export default SalesChart;
