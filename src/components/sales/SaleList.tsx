// src/components/sales/SaleList.tsx

interface SaleItem {
  customerName: string;
  totalSpent: string;
  orders: string;
  paymentMethod: string;
  date: string;
}

interface SaleListProps {
  sales: SaleItem[];
  onEdit: (sale: SaleItem) => void;
  onDelete: (sale: SaleItem) => void;
}

export default function SaleList({ sales, onEdit, onDelete }: SaleListProps) {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {sales.map((sale, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{sale.customerName}</h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">{sale.date}</span>
          </div>
          <p className="text-md text-gray-700 dark:text-gray-300">{sale.orders}</p>
          <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">{sale.totalSpent}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Payment Method: {sale.paymentMethod}</p>
          <div className="flex justify-end gap-3">
            <button
              onClick={() => onEdit(sale)}
              className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(sale)}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
