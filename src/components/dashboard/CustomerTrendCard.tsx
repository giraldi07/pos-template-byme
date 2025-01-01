// src/components/dashboard/CustomerTrendCard.tsx
import React from 'react';

interface CustomerTrendCardProps {
  customerName: string;
  amountSpent: string;
  totalPurchases: number;
}

const CustomerTrendCard: React.FC<CustomerTrendCardProps> = ({ customerName, amountSpent, totalPurchases }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between space-x-4">
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Customer Trend</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Recent Purchases by {customerName}</p>
        </div>
        <div>
          <p className="text-xl font-bold text-gray-900 dark:text-gray-200">{amountSpent}</p>
          <p className="text-sm text-gray-500 dark:text-gray-300">Total Purchases: {totalPurchases}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerTrendCard;
