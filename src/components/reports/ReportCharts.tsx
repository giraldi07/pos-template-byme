import React from 'react';
import { Line, Bar } from 'react-chartjs-2';

export default function ReportCharts() {
  const salesData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Sales',
      data: [1200, 1900, 1500, 2100, 1800, 2500, 2200],
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
      tension: 0.4,
    }]
  };

  const categoryData = {
    labels: ['Electronics', 'Accessories', 'Gadgets', 'Phones'],
    datasets: [{
      label: 'Sales by Category',
      data: [4200, 3800, 2900, 5100],
      backgroundColor: [
        'rgba(59, 130, 246, 0.5)',
        'rgba(16, 185, 129, 0.5)',
        'rgba(245, 158, 11, 0.5)',
        'rgba(239, 68, 68, 0.5)',
      ],
    }]
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Sales Overview</h3>
        <Line data={salesData} options={{ maintainAspectRatio: false }} />
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Sales by Category</h3>
        <Bar data={categoryData} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  );
}