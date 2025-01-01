// src/components/dashboard/CustomerTrendCard.tsx
import React from 'react';

interface CustomerTrend {
  customerName: string;
  visits: number;
  amountSpent: string;
}

interface CustomerTrendCardProps {
  trends: CustomerTrend[];
}

const CustomerTrendCard: React.FC<CustomerTrendCardProps> = ({ trends }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between space-x-4 mb-4">
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Customer Trend</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Recent Purchases by Customers</p>
        </div>
      </div>

      {/* Tabel Data dengan scroll */}
      <div className="max-h-60 overflow-y-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 border-collapse">
          <thead>
            <tr>
              <th className="py-2 px-4 text-left text-sm font-medium text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-600">Customer Name</th>
              <th className="py-2 px-4 text-left text-sm font-medium text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-600">Visits</th>
              <th className="py-2 px-4 text-left text-sm font-medium text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-600">Amount Spent</th>
            </tr>
          </thead>
          <tbody>
            {trends.map((trend, index) => (
              <tr key={index}>
                <td className="py-2 px-4 text-sm text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-600">{trend.customerName}</td>
                <td className="py-2 px-4 text-sm text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-600">{trend.visits}</td>
                <td className="py-2 px-4 text-sm font-semibold text-gray-900 dark:text-gray-200 border-b border-gray-200 dark:border-gray-600">{trend.amountSpent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerTrendCard;
