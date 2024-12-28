import React from 'react';
import { 
  TrendingUp, 
  Users, 
  AlertTriangle,
  DollarSign 
} from 'lucide-react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { formatCurrency } from '../lib/utils';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const stats = [
  {
    title: 'Total Sales',
    value: '$12,345',
    icon: DollarSign,
    change: '+12.5%',
    trend: 'up',
  },
  {
    title: 'Active Customers',
    value: '126',
    icon: Users,
    change: '+5.2%',
    trend: 'up',
  },
  {
    title: 'Low Stock Items',
    value: '8',
    icon: AlertTriangle,
    change: '-2.3%',
    trend: 'down',
  },
  {
    title: 'Daily Revenue',
    value: '$1,234',
    icon: TrendingUp,
    change: '+8.1%',
    trend: 'up',
  },
];

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

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{stat.title}</p>
                <p className="text-2xl font-semibold mt-1 text-gray-800 dark:text-white">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-full ${
                stat.trend === 'up' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
              }`}>
                <stat.icon size={24} />
              </div>
            </div>
            <div className="mt-4">
              <span className={`text-sm ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400"> vs last week</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <Line data={chartData} options={chartOptions} />
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Recent Sales</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">Order #{1000 + index}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date().toLocaleDateString()}
                  </p>
                </div>
                <span className="font-semibold text-gray-800 dark:text-white">
                  {formatCurrency(Math.floor(Math.random() * 1000))}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
