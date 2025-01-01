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

const trends = [
  { customerName: 'John Doe', visits: 10, amountSpent: '$1,234.50' },
  { customerName: 'Jane Smith', visits: 8, amountSpent: '$980.00' },
  { customerName: 'Michael Johnson', visits: 15, amountSpent: '$1,500.00' },
  { customerName: 'Emily Davis', visits: 5, amountSpent: '$650.00' },
  { customerName: 'Chris Brown', visits: 3, amountSpent: '$300.00' },
  { customerName: 'Patricia Williams', visits: 7, amountSpent: '$1,100.00' },
  { customerName: 'Robert Wilson', visits: 12, amountSpent: '$1,200.00' },
  { customerName: 'Linda Moore', visits: 6, amountSpent: '$700.00' },
  { customerName: 'David Taylor', visits: 10, amountSpent: '$1,000.00' },
  { customerName: 'Laura Thomas', visits: 4, amountSpent: '$500.00' },
];

const items = [
  { name: 'Item A', quantity: 120, revenue: '$1000', imageUrl: '/assets/images/beans.png' },
  { name: 'Item B', quantity: 80, revenue: '$640', imageUrl: '/assets/images/coffee-cup.png' },
  { name: 'Item C', quantity: 50, revenue: '$450', imageUrl: '/assets/images/cup.png' },
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
        <CustomerTrendCard trends={trends} />
        <TopSellingItemsCard items={items} />
      </div>
    </div>
  );
}
