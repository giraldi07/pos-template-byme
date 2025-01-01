// src/components/dashboard/TopSellingItemsCard.tsx
import React from 'react';

interface TopSellingItem {
  name: string;
  quantity: number;
  revenue: string;
  imageUrl: string; // Menambahkan URL gambar untuk setiap item
}

interface TopSellingItemsCardProps {
  items: TopSellingItem[];
}

const TopSellingItemsCard: React.FC<TopSellingItemsCardProps> = ({ items }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Top Selling Items</h3>

      {/* Tabel Data */}
      <table className="min-w-full bg-white dark:bg-gray-800 border-collapse">
        <thead>
          <tr>
            <th className="py-2 px-4 text-left text-sm font-medium text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-600">Item Name</th>
            <th className="py-2 px-4 text-left text-sm font-medium text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-600">Quantity</th>
            <th className="py-2 px-4 text-left text-sm font-medium text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-600">Revenue</th>
            <th className="py-2 px-4 text-left text-sm font-medium text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-600">Image</th> {/* Kolom gambar */}
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className="py-2 px-4 text-sm text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-600">{item.name}</td>
              <td className="py-2 px-4 text-sm text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-600">{item.quantity}</td>
              <td className="py-2 px-4 text-sm text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-600">{item.revenue}</td>
              <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">
                <img src={item.imageUrl} alt={item.name} className="w-12 h-12 object-cover rounded" /> {/* Menampilkan gambar kecil */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopSellingItemsCard;
