import React, { useState } from 'react';
import { Search } from 'lucide-react';
import POSProductCard from './POSProductCard';
import POSCategories from './POSCategories';

export default function POSProducts() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden flex flex-col">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 
                     dark:bg-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 
                     focus:ring-blue-500 dark:focus:ring-blue-400"
          />
        </div>
      </div>

      <POSCategories />

      <div className="flex-1 overflow-y-auto p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <POSProductCard />
      </div>
    </div>
  );
}