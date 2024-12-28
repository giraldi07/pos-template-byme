import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  LayoutDashboard,
  Package,
  Users,
  ShoppingCart,
  BarChart,
  Settings,
  Menu
} from 'lucide-react';
import { toggleSidebar } from '../../store/slices/uiSlice';
import { RootState } from '../../store';
import { cn } from '../../lib/utils';

const navigation = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
  { name: 'Products', icon: Package, path: '/products' },
  { name: 'Customers', icon: Users, path: '/customers' },
  { name: 'POS', icon: ShoppingCart, path: '/pos' },
  { name: 'Reports', icon: BarChart, path: '/reports' },
  { name: 'Settings', icon: Settings, path: '/settings' },
];

export default function Sidebar() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.ui.sidebarOpen);

  return (
    <div
      className={cn(
        "fixed left-0 top-0 h-full bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 z-50",
        isOpen ? "w-64" : "w-16"
      )}
    >
      {/* Header */}
      <div className="flex h-16 items-center justify-between p-4 border-b dark:border-gray-700 dark:text-indigo-600">
        <h1
          className={cn(
            "font-bold text-lg transition-opacity duration-300",
            isOpen ? "opacity-100" : "opacity-0 hidden"
          )}
        >
          ModernPOS
        </h1>
        <button
          onClick={() => dispatch(toggleSidebar())}
          className="py-2 px- rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="mt-4">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex ml-2 mr-2 mb-4 items-center gap-4 px-3 py-4 text-gray-700 dark:text-gray-200 rounded-lg transition-colors",
                "hover:bg-gray-100 dark:hover:bg-gray-800",
                isActive && "bg-blue-50 dark:bg-gray-800 text-blue-600 dark:text-blue-400",
                !isOpen && "justify-center" // Center icons when sidebar is closed
              )
            }
          >
            <item.icon size={20} />
            <span
              className={cn(
                "transition-opacity duration-300",
                isOpen ? "opacity-100" : "opacity-0 hidden"
              )}
            >
              {item.name}
            </span>
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="absolute bottom-0 w-full p-4 border-t dark:border-gray-700">
        <p
          className={cn(
            "text-sm text-center text-gray-500 dark:text-gray-400 transition-opacity duration-300",
            isOpen ? "opacity-100" : "opacity-0 hidden"
          )}
        >
          &copy; 2024 ModernPOS
        </p>
      </div>
    </div>
  );
}
