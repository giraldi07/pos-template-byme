export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  stock: number;
  image: string;
  barcode?: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface Order {
  id: string;
  customerId: string;
  items: OrderItem[];
  total: number;
  date: string;
  status: 'pending' | 'completed' | 'cancelled';
}

export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface DashboardStats {
  totalSales: number;
  activeCustomers: number;
  lowStockItems: number;
  dailySales: number[];
}