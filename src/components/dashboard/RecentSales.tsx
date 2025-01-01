// src/components/dashboard/RecentSales.tsx
import React from 'react';
import { formatCurrency } from '../../lib/utils';

const RecentSales: React.FC = () => {
  return (
    <div className="bg-white dark:bg-indigo-600 p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Recent Sales</h3>
      <div className="space-y-4">
        {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
          <div key={index} className="flex items-center justify-between border-dotted border-b border-gray-300">
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
  );
};

export default RecentSales;
