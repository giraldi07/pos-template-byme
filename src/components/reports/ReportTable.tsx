import React from 'react';
import { formatCurrency } from '../../lib/utils';

export default function ReportTable() {
  const reports = [
    { id: 1, date: '2024-02-20', orders: 45, revenue: 4500.00, profit: 1200.00 },
    { id: 2, date: '2024-02-19', orders: 38, revenue: 3800.00, profit: 950.00 },
    { id: 3, date: '2024-02-18', orders: 52, revenue: 5200.00, profit: 1400.00 },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="font-semibold">Daily Reports</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Orders</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Revenue</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Profit</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {reports.map((report) => (
              <tr key={report.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-6 py-4 whitespace-nowrap">{report.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{report.orders}</td>
                <td className="px-6 py-4 whitespace-nowrap">{formatCurrency(report.revenue)}</td>
                <td className="px-6 py-4 whitespace-nowrap">{formatCurrency(report.profit)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}