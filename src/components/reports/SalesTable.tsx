// src/components/reports/SalesTable.tsx
interface Sale {
  customerName: string;
  totalSpent: string;
  paymentMethod: string;
  date: string;
}

interface SalesTableProps {
  sales: Sale[];
}

export default function SalesTable({ sales }: SalesTableProps) {
  return (
    <div className="p-6 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Sales Transactions</h2>
      <div className="overflow-x-auto mt-4">
        <table className="w-full table-auto">
          <thead>
            <tr className="border-b dark:border-gray-700">
              <th className="p-2 text-left dark:text-slate-400">Customer</th>
              <th className="p-2 text-left dark:text-slate-400">Total</th>
              <th className="p-2 text-left dark:text-slate-400">Payment</th>
              <th className="p-2 text-left dark:text-slate-400">Date</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale, index) => (
              <tr key={index} className="border-b dark:border-gray-700">
                <td className="p-2 dark:text-slate-500">{sale.customerName}</td>
                <td className="p-2 dark:text-slate-500">{sale.totalSpent}</td>
                <td className="p-2 dark:text-slate-500">{sale.paymentMethod}</td>
                <td className="p-2 dark:text-slate-500">{sale.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
