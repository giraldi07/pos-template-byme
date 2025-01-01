import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Products from '../pages/Products';
import Customers from '../pages/Customers';
import POS from '../pages/POS';
import Reports from '../pages/Reports';
import Settings from '../pages/Settings';
import Sale from '../pages/Sale';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/products" element={<Products />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/pos" element={<POS />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/sale" element={<Sale />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}