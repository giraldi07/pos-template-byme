import React from 'react';

export default function POSCategories() {
  const categories = ['All', 'Electronics', 'Accessories', 'Gadgets', 'Phones'];

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
      <div className="p-2 flex space-x-2">
        {categories.map((category, index) => (
          <button
            key={index}
            className="px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap
                     bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200
                     hover:bg-blue-100 dark:hover:bg-blue-800
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
