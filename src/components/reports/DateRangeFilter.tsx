// src/components/reports/DateRangeFilter.tsx
import { useState } from 'react';

export default function DateRangeFilter({ onFilter }: { onFilter: (startDate: string, endDate: string) => void }) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (startDate && endDate) {
      onFilter(startDate, endDate);
    }
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md mb-6">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col sm:flex-row gap-2 sm:w-1/2">
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="mt-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:w-1/2">
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="mt-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800"
            />
          </div>
        </div>
        <button type="submit" className="mt-4 sm:mt-0 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Apply Filter
        </button>
      </form>
    </div>
  );
}
