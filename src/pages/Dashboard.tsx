// src/pages/Dashboard.tsx
import StatCard from '../components/dashboard/StatCard';
import SalesChart from '../components/dashboard/SalesChart';
import RecentSales from '../components/dashboard/RecentSales';
import CustomerTrendCard from '../components/dashboard/CustomerTrendCard';
import TopSellingItemsCard from '../components/dashboard/TopSellingItemsCard';
import { DollarSign, Users, AlertTriangle, TrendingUp } from 'lucide-react';

const stats = [
  {
    title: 'Total Sales',
    value: '$12,345',
    icon: DollarSign,
    change: '+12.5%',
    trend: 'up' as 'up' | 'down', // Pastikan ini menggunakan 'up' atau 'down'
  },
  {
    title: 'Active Customers',
    value: '126',
    icon: Users,
    change: '+5.2%',
    trend: 'up' as 'up' | 'down',
  },
  {
    title: 'Low Stock Items',
    value: '8',
    icon: AlertTriangle,
    change: '-2.3%',
    trend: 'down' as 'up' | 'down',
  },
  {
    title: 'Daily Revenue',
    value: '$1,234',
    icon: TrendingUp,
    change: '+8.1%',
    trend: 'up' as 'up' | 'down',
  },
];

const customerTrend = {
  customerName: 'John Doe',
  amountSpent: '$1,234.50',
  totalPurchases: 12,
};

const topSellingItems = [
  { name: 'Item A', quantity: 45, revenue: '$1,500' },
  { name: 'Item B', quantity: 30, revenue: '$900' },
  { name: 'Item C', quantity: 25, revenue: '$750' },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            change={stat.change}
            trend={stat.trend}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-slate-100 p-6 rounded-lg shadow-sm">
          <SalesChart />
        </div>

        <RecentSales />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CustomerTrendCard
          customerName={customerTrend.customerName}
          amountSpent={customerTrend.amountSpent}
          totalPurchases={customerTrend.totalPurchases}
        />
        <TopSellingItemsCard items={topSellingItems} />
      </div>
    </div>
  );
}
