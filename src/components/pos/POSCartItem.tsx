import React from 'react';
import { Minus, Plus, X } from 'lucide-react';

export default function POSCartItem() {
  const cartItems = [
    {
      id: '1',
      name: 'Wireless Earbuds',
      price: 99.99,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&q=80&w=100&h=100',
    },
  ];

  return (
    <>
      {cartItems.map((item) => (
        <div key={item.id} className="flex items-center gap-3">
          <img
            src={item.image}
            alt={item.name}
            className="w-16 h-16 rounded-lg object-cover"
          />
          <div className="flex-1">
            <h3 className="font-medium text-gray-900 dark:text-gray-100 ">{item.name}</h3>
            <p className="text-sm text-gray-500 dark:text-sky-400/75">${item.price}</p>
          </div>
          <div className="flex items-center gap-2 ">
            <button className="p-1 rounded-full hover:bg-slate-500	text-red-600 dark:hover:bg-slate-500">
              <Minus size={16} />
            </button>
            <span className="w-8 text-center text-indigo-500">{item.quantity}</span>
            <button className="p-1 rounded-full text-orange-300 hover:bg-gray-100 dark:hover:bg-gray-700">
              <Plus size={16} />
            </button>
          </div>
          <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500">
            <X size={16} />
          </button>
        </div>
      ))}
    </>
  );
}