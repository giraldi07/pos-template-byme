import React from 'react';
import { Edit, Trash2, Mail, Phone } from 'lucide-react';
import CustomerListFilters from './CustomerListFilters';

const demoCustomers = [
  { id: '1', name: 'John Smith', email: 'john.smith@example.com', phone: '+1 (555) 123-4567', totalOrders: 12, totalSpent: 1234.56, lastOrder: '2024-02-15' },
  { id: '2', name: 'Sarah Johnson', email: 'sarah.j@example.com', phone: '+1 (555) 987-6543', totalOrders: 8, totalSpent: 876.43, lastOrder: '2024-02-14' },
  { id: '3', name: 'Michael Brown', email: 'michael.b@example.com', phone: '+1 (555) 456-7890', totalOrders: 15, totalSpent: 2345.67, lastOrder: '2024-02-13' },
];

export default function CustomerList() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <CustomerListFilters />
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Contact</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Orders</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Total Spent</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Last Order</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {demoCustomers.map((customer) => (
              <tr key={customer.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-200 font-semibold text-lg">
                        {customer.name.charAt(0)}
                      </span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-100">{customer.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">ID: {customer.id}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex flex-col space-y-1">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Mail size={16} className="mr-2" />
                      {customer.email}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Phone size={16} className="mr-2" />
                      {customer.phone}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">{customer.totalOrders}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">${customer.totalSpent.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {new Date(customer.lastOrder).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-3">
                    <button className="text-blue-600 hover:text-blue-900 dark:hover:text-blue-400"><Edit size={18} /></button>
                    <button className="text-red-600 hover:text-red-900 dark:hover:text-red-400"><Trash2 size={18} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
