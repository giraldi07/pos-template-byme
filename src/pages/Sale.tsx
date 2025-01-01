// src/pages/Sale.tsx

import { useState } from 'react';
import SaleHeader from '../components/sales/SaleHeader';
import SaleList from '../components/sales/SaleList';
import SaleFilter from '../components/sales/SaleFilter';

interface SaleItem {
  customerName: string;
  totalSpent: string;
  orders: string;
  paymentMethod: string;
  date: string;
}

export default function Sale() {
  const [sales, setSales] = useState<SaleItem[]>([]);
  const [filter, setFilter] = useState('');

  const addSale = (sale: SaleItem) => {
    setSales([sale, ...sales]); // Menambah data penjualan baru
  };

  // Filter data berdasarkan nama customer
  const filteredSales = sales.filter((sale) =>
    sale.customerName.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <SaleHeader />

      {/* Menambahkan Sale */}
      <button
        onClick={() =>
          addSale({
            customerName: 'John Doe', // Contoh data untuk pengujian
            totalSpent: '$120.00',
            orders: '1 x Wireless Earbuds - $99.99',
            paymentMethod: 'Credit Card',
            date: new Date().toLocaleString(),
          })
        }
        className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 m-4"
      >
        Add Sale
      </button>

      <SaleFilter filter={filter} setFilter={setFilter} />

      <SaleList sales={filteredSales} onEdit={function (_sale: SaleItem): void {
        throw new Error('Function not implemented.');
      } } onDelete={function (_sale: SaleItem): void {
        throw new Error('Function not implemented.');
      } } />
    </div>
  );
}
