import React from 'react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  customerName: string;
  setCustomerName: React.Dispatch<React.SetStateAction<string>>;
  contact: string;
  setContact: React.Dispatch<React.SetStateAction<string>>;
  cartItems: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }[];
  totalSpent: number;
  paymentMethod: string;
  setPaymentMethod: React.Dispatch<React.SetStateAction<string>>;
  handlePayment: (e: React.FormEvent) => void;
}

export default function PaymentModal({
  isOpen,
  onClose,
  customerName,
  setCustomerName,
  contact,
  setContact,
  cartItems,
  totalSpent,
  paymentMethod,
  setPaymentMethod,
  handlePayment,
}: PaymentModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-96 p-6 shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Payment Information</h2>
        <form className="mt-4 space-y-4" onSubmit={handlePayment}>
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300">Customer Name</label>
            <input
              type="text"
              placeholder="Enter customer name"
              className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300">Contact</label>
            <input
              type="text"
              placeholder="Enter contact details"
              className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300">Orders</label>
            <textarea
              className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              value={cartItems
                .map((item) => `${item.quantity} x ${item.name} - $${(item.price * item.quantity).toFixed(2)}`)
                .join('\n')}
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300">Total Spent</label>
            <input
              type="text"
              className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              value={`$${(totalSpent * 1.1).toFixed(2)}`}
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300">Payment Method</label>
            <select
              className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            >
              <option value="credit-card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bank-transfer">Bank Transfer</option>
              <option value="cash">Cash</option>
            </select>
          </div>
          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={onClose}
              className="p-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Confirm Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
