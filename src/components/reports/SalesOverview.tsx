// src/components/reports/SalesOverview.tsx
import { TrendingUp, ShoppingCart } from 'lucide-react';

interface SalesOverviewProps {
  totalSales: string;
  totalTransactions: number;
}

export default function SalesOverview({ totalSales, totalTransactions }: SalesOverviewProps) {
  return (
    <div className="p-6 bg-white border border-gray-200 dark:border-gray-600  dark:bg-gray-800 rounded-lg shadow-md space-y-4">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Sales Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex items-center gap-4 w-full">
          <TrendingUp size={24} className="text-green-500" />
          <div>
            <p className="text-lg font-medium text-gray-900 dark:text-white">Total Sales</p>
            <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">{totalSales}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 w-full">
          <ShoppingCart size={24} className="text-blue-500" />
          <div>
            <p className="text-lg font-medium text-gray-900 dark:text-white">Total Transactions</p>
            <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">{totalTransactions}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
