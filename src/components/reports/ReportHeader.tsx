// src/components/reports/ReportHeader.tsx
import { useState } from 'react';
import { FileDown } from 'lucide-react';

interface ReportHeaderProps {
  onFilter: (startDate: string, endDate: string) => void;
  onExport: () => void;
}

export default function ReportHeader({ onFilter, onExport }: ReportHeaderProps) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleFilter = (e: React.FormEvent) => {
    e.preventDefault();
    if (startDate && endDate) {
      onFilter(startDate, endDate);
    }
  };

  return (
    <div className="flex flex-col border-b border-gray-200 dark:border-gray-600 sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 p-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Sales Reports</h1>
        <p className="text-gray-500 dark:text-gray-400">Analyze your sales and transactions</p>
      </div>
      <div className="flex flex-wrap gap-3 sm:gap-4 justify-start sm:justify-end w-full sm:w-auto">
        {/* Filter Section */}
        <form onSubmit={handleFilter} className="flex flex-wrap gap-2 w-full sm:w-auto">
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="px-4 py-2 border rounded-lg w-full sm:w-40"
          />
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="px-4 py-2 border rounded-lg w-full sm:w-40"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full sm:w-auto"
          >
            Apply Filter
          </button>
        </form>

        {/* Export Button */}
        <button
          onClick={onExport}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2 w-full sm:w-auto"
        >
          <FileDown size={20} />
          <span>Export</span>
        </button>
      </div>
    </div>
  );
}
