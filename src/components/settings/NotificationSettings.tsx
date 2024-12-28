import React from 'react';
import { Bell, ShoppingCart, AlertTriangle, Package } from 'lucide-react';

export default function NotificationSettings() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
      <h2 className="dark:text-blue-500/100 text-lg font-semibold mb-4">Notifications</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
              <Bell size={20} />
            </div>
            <div>
              <p className="dark:text-blue-500/100 font-medium">Push Notifications</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Enable desktop notifications</p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                        peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer 
                        dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white 
                        after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white 
                        after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
                        after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400">
              <ShoppingCart size={20} />
            </div>
            <div>
              <p className="dark:text-blue-500/100 font-medium">Order Updates</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Get notified about new orders</p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" defaultChecked />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                        peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer 
                        dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white 
                        after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white 
                        after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
                        after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400">
              <AlertTriangle size={20} />
            </div>
            <div>
              <p className="dark:text-blue-500/100 font-medium">Low Stock Alerts</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Get notified when stock is low</p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" defaultChecked />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                        peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer 
                        dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white 
                        after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white 
                        after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
                        after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400">
              <Package size={20} />
            </div>
            <div>
              <p className="dark:text-blue-500/100 font-medium">Product Updates</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Get notified about product changes</p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                        peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer 
                        dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white 
                        after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white 
                        after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
                        after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
    </div>
  );
}