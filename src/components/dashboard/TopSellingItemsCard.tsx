// src/components/dashboard/TopSellingItemsCard.tsx
import React from 'react';

interface TopSellingItem {
  name: string;
  quantity: number;
  revenue: string;
}

interface TopSellingItemsCardProps {
  items: TopSellingItem[];
}

const TopSellingItemsCard: React.FC<TopSellingItemsCardProps> = ({ items }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Top Selling Items</h3>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">{item.name}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Quantity: {item.quantity}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Revenue: {item.revenue}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSellingItemsCard;
