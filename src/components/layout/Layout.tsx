import React from 'react';
import { useSelector } from 'react-redux';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { RootState } from '../../store';
import { cn } from '../../lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const sidebarOpen = useSelector((state: RootState) => state.ui.sidebarOpen);
  const theme = useSelector((state: RootState) => state.ui.theme);

  return (
    <div className={cn(
      "min-h-screen bg-gray-50 dark:bg-gray-900",
      theme === 'dark' ? 'dark' : ''
    )}>
      <Sidebar />
      <div className={cn(
        "transition-all duration-300",
        sidebarOpen ? "ml-64" : "ml-20"
      )}>
        <Navbar />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}