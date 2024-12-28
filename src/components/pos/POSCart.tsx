import React from 'react';
import { Trash2, CreditCard, ShoppingCart } from 'lucide-react';
import POSCartItem from './POSCartItem';

export default function POSCart() {
  return (
    <div className="w-full lg:w-96 bg-white dark:bg-gray-800 rounded-lg shadow-sm flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 dark:text-sky-400/75 flex items-center gap-2">
        <ShoppingCart size={20} className="text-blue-600 dark:text-blue-400 " />
        <h2 className="text-lg font-semibold">Current Order</h2>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto max-h-80 p-4 space-y-4">
        <POSCartItem />
        {/* Tambahkan lebih banyak item secara dinamis */}
      </div>

      {/* Summary */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="space-y-3">
          <div className="flex justify-between text-sm dark:text-indigo-400">
            <span>Subtotal</span>
            <span>$299.98</span>
          </div>
          <div className="flex justify-between text-sm dark:text-indigo-400">
            <span>Tax (10%)</span>
            <span>$29.99</span>
          </div>
          <div className="flex justify-between font-semibold dark:text-indigo-400">
            <span>Total</span>
            <span>$329.97</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <button
            className="p-2 rounded-lg dark:text-red-700 border border-gray-300 dark:border-gray-600 
                       hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center justify-center gap-2 transition">
            <Trash2 size={20} className="text-red-600" />
            <span>Clear</span>
          </button>
          <button
            className="p-2 rounded-lg bg-blue-600 text-white 
                       hover:bg-blue-700 flex items-center justify-center gap-2 transition">
            <CreditCard size={20} />
            <span>Pay</span>
          </button>
        </div>
      </div>
    </div>
  );
}