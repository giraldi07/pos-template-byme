import React from 'react';
import { Plus } from 'lucide-react';

export default function POSProductCard() {
  const products = [
    {
      id: '1',
      name: 'Wireless Earbuds',
      price: 99.99,
      image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&q=80&w=200&h=200',
    },
    {
      id: '2',
      name: 'Smart Watch',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=200&h=200',
    },
  ];

  return (
    <>
      {products.map((product) => (
        <button
          key={product.id}
          className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm hover:shadow-md 
                   transition-shadow duration-200 flex flex-col items-center text-center"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-32 object-cover rounded-lg mb-3"
          />
          <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-1">{product.name}</h3>
          <p className="text-blue-600 dark:text-blue-400 font-semibold">${product.price}</p>
          <div className="mt-2 p-1 rounded-full bg-blue-600 text-white">
            <Plus size={18} />
          </div>
        </button>
      ))}
    </>
  );
}