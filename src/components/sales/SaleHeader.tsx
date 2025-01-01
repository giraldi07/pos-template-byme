import { Plus, FileDown, FileUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Pastikan mengimpor useNavigate

export default function SaleHeader() {
  const navigate = useNavigate();

  const handleAddSale = () => {
    navigate('/pos'); // Arahkan ke halaman POS.tsx
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Sales Overview</h1>
        <p className="text-gray-500 dark:text-gray-400">Manage and review all your sales transactions</p>
      </div>
      <div className="flex gap-3">
        <button
          onClick={handleAddSale}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
        >
          <Plus size={20} />
          <span>Add Sale</span>
        </button>
        <button className="px-4 py-2 border dark:text-blue-500/100 border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-2">
          <FileDown size={20} />
          <span>Export</span>
        </button>
        <button className="px-4 py-2 border dark:text-blue-500/100 border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-2">
          <FileUp size={20} />
          <span>Import</span>
        </button>
      </div>
    </div>
  );
}
