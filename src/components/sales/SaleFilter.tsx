import { Search, Filter } from 'lucide-react';

// Menambahkan tipe props yang sesuai
interface SaleFilterProps {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export default function SaleFilter({ filter, setFilter }: SaleFilterProps) {
  return (
    <div className="p-4 border-b border-gray-200 dark:border-gray-700">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)} // Mengubah nilai filter
            placeholder="Search sales by customer..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 
                     dark:bg-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 
                     focus:ring-blue-500 dark:focus:ring-blue-400"
          />
        </div>
        <div className="flex gap-3">
          <select className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 
                           dark:bg-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 
                           focus:ring-blue-500 dark:focus:ring-blue-400">
            <option value="">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="appliances">Appliances</option>
          </select>
          <button className="px-4 dark:text-blue-500/100 py-2 border border-gray-300 dark:border-gray-700 rounded-lg 
                           hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-2">
            <Filter size={20} />
            <span>Filters</span>
          </button>
        </div>
      </div>
    </div>
  );
}
