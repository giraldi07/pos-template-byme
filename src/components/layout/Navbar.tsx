import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Search, Bell, User, Sun, Moon } from 'lucide-react';
import { toggleTheme } from '../../store/slices/uiSlice';
import { RootState } from '../../store';

export default function Navbar() {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.ui.theme);
  const isOffline = useSelector((state: RootState) => state.ui.isOffline);

  return (
    <div className="h-16 bg-white dark:bg-gray-900 shadow-sm flex items-center justify-between px-4 sm:px-6 lg:px-8 transition-colors">
      {/* Search Input */}
      <div className="flex-1 max-w-xl sm:flex hidden">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                     bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-4">
        {/* Offline Mode Indicator */}
        {isOffline && (
          <span className="text-red-500 text-sm hidden sm:inline-block">Offline Mode</span>
        )}

        {/* Notifications */}
        <button className="relative p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
          <Bell size={20} className="text-gray-600 dark:text-gray-300" />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
        </button>

        {/* Theme Toggle */}
        <button
          onClick={() => dispatch(toggleTheme())}
          className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
        >
          {theme === 'light' ? (
            <Moon size={20} className="text-gray-600 dark:text-gray-300" />
          ) : (
            <Sun size={20} className="text-gray-600 dark:text-gray-300" />
          )}
        </button>

        {/* User Profile */}
        <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
          <User size={20} className="text-gray-600 dark:text-gray-300" />
          <span className="hidden sm:inline-block text-sm font-medium text-gray-800 dark:text-gray-200">
            Admin
          </span>
        </button>
      </div>
    </div>
  );
}
