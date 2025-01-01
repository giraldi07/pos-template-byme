// src/components/reports/SalesChart.tsx
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface SalesChartProps {
  data: Array<{ date: string; sales: number }>;
}

export default function SalesChart({ data }: SalesChartProps) {
  return (
    <div className="p-6 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Sales Trend</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
