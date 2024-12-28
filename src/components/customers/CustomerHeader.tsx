import React from 'react';
import { UserPlus, FileDown, FileUp } from 'lucide-react';

export default function CustomerHeader() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Customers</h1>
        <p className="text-gray-500 dark:text-gray-400">Manage your customer database</p>
      </div>
      <div className="flex gap-3">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
          <UserPlus size={20} />
          <span>Add Customer</span>
        </button>
        <button className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-2">
          <FileDown size={20} />
          <span>Export</span>
        </button>
        <button className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-2">
          <FileUp size={20} />
          <span>Import</span>
        </button>
      </div>
    </div>
  );
}
