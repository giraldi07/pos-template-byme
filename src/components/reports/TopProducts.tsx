// src/components/reports/TopProducts.tsx
interface Product {
  name: string;
  totalSold: number;
}

interface TopProductsProps {
  products: Product[];
}

export default function TopProducts({ products }: TopProductsProps) {
  return (
    <div className="p-6 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Top Selling Products</h2>
      <ul className="mt-4 space-y-3 w-full">
        {products.map((product, index) => (
          <li key={index} className="flex justify-between items-center w-full">
            <span className="text-gray-800 dark:text-gray-200">{product.name}</span>
            <span className="text-gray-600 dark:text-gray-400">Sold: {product.totalSold}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
