import React from 'react';
import { useSelector } from 'react-redux';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { RootState } from '../../store';
import { cn } from '../../lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Mengambil state dari Redux
  const sidebarOpen = useSelector((state: RootState) => state.ui.sidebarOpen);
  const theme = useSelector((state: RootState) => state.ui.theme) || 'light';

  return (
    <div
      className={cn(
        'min-h-screen bg-gray-50 dark:bg-gray-900',
        theme === 'dark' && 'dark' // Menambahkan class 'dark' jika tema gelap
      )}
    >
      {/* Sidebar */}
      <Sidebar aria-hidden={!sidebarOpen} />

      {/* Kontainer utama */}
      <div
        className={cn(
          'transition-all duration-300', // Menambahkan animasi transisi
          sidebarOpen ? 'ml-64' : 'ml-20' // Mengatur posisi berdasarkan sidebar
        )}
      >
        {/* Navbar */}
        <Navbar />

        {/* Konten utama */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

// Menggunakan React.memo untuk memaksimalkan performa
export default React.memo(Layout);
