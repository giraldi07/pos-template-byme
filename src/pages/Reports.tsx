// src/pages/Reports.tsx
import { useState } from 'react';
import SalesOverview from '../components/reports/SalesOverview';
import SalesChart from '../components/reports/SalesChart';
import SalesTable from '../components/reports/SalesTable';
import TopProducts from '../components/reports/TopProducts';
import { saveAs } from 'file-saver';
import { utils, write } from 'xlsx';
import Pagination from '../components/reports/Pagination';
import ReportHeader from '../components/reports/ReportHeader';

export default function Reports() {
  const salesList = [
    { customerName: 'John Doe', totalSpent: '$120.00', paymentMethod: 'Credit Card', date: '2024-01-01' },
    { customerName: 'Jane Smith', totalSpent: '$300.00', paymentMethod: 'PayPal', date: '2024-01-02' },
    { customerName: 'Sarah Lee', totalSpent: '$450.00', paymentMethod: 'Credit Card', date: '2024-01-03' },
    { customerName: 'David Brown', totalSpent: '$200.00', paymentMethod: 'Cash', date: '2024-01-04' },
    { customerName: 'Emily Clark', totalSpent: '$500.00', paymentMethod: 'PayPal', date: '2024-01-05' },
    { customerName: 'Chris Johnson', totalSpent: '$700.00', paymentMethod: 'Credit Card', date: '2024-01-06' },
  ];

  const totalSales = "$15,000";
  const totalTransactions = 350;
  const salesData = [
    { date: '2024-01-01', sales: 1200 },
    { date: '2024-01-02', sales: 1300 },
    { date: '2024-01-03', sales: 1000 },
    { date: '2024-01-04', sales: 1500 },
  ];

  const topProducts = [
    { name: 'Wireless Earbuds', totalSold: 120 },
    { name: 'Smart Watch', totalSold: 80 },
  ];

  const [filteredSales, setFilteredSales] = useState(salesList);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleDateFilter = (startDate: string, endDate: string) => {
    const filtered = salesList.filter((sale) => {
      const saleDate = new Date(sale.date);
      return saleDate >= new Date(startDate) && saleDate <= new Date(endDate);
    });
    setFilteredSales(filtered);
  };

  const exportToExcel = () => {
    const ws = utils.json_to_sheet(filteredSales);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, 'Sales Data');
    const file = write(wb, { bookType: 'xlsx', type: 'array' });
    saveAs(new Blob([file]), 'sales-report.xlsx');
  };

  const paginate = (data: any[]) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 space-y-6">
      {/* Header Section */}
      <ReportHeader onFilter={handleDateFilter} onExport={exportToExcel} />

      <div className="bg-white dark:bg-transparent rounded-lg shadow-md p-4 space-y-6">
        {/* Overview Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <SalesOverview totalSales={totalSales} totalTransactions={totalTransactions} />
          <SalesChart data={salesData} />
          <TopProducts products={topProducts} />
        </div>

        {/* Sales Table Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <SalesTable sales={paginate(filteredSales)} />
        </div>

        {/* Pagination Section */}
        <div className="flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalItems={filteredSales.length}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}
