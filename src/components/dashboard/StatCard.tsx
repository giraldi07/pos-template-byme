import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  change: string;
  trend: 'up' | 'down'; // Pastikan hanya menerima 'up' atau 'down'
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon: Icon, change, trend }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
      <div className="flex items-center space-x-4">
        {/* Ganti size menjadi width dan height */}
        <Icon width={24} height={24} className="text-gray-500 dark:text-gray-300" />
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">{title}</h3>
          <p className="text-xl font-bold text-gray-900 dark:text-gray-200">{value}</p>
          <p className={`text-sm ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>{change}</p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
