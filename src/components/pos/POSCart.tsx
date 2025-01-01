import { useState } from 'react';
import { Trash2, CreditCard, ShoppingCart, Minus, Plus, X } from 'lucide-react';

export default function POSCart() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Data keranjang yang bisa diambil dari POSCartItem
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Wireless Earbuds',
      price: 99.99,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&q=80&w=100&h=100',
    },
  ]);

  const [customerName, setCustomerName] = useState('');
  const [contact, setContact] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  // Fungsi untuk menutup modal
  const closeModal = () => setIsModalOpen(false);

  // Fungsi untuk membuka modal
  const openModal = () => setIsModalOpen(true);

  // Fungsi untuk menambah/kurangi jumlah item di keranjang
  const updateQuantity = (id: string, action: 'increase' | 'decrease') => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: action === 'increase' ? item.quantity + 1 : item.quantity > 1 ? item.quantity - 1 : item.quantity,
            }
          : item
      )
    );
  };

  // Fungsi untuk menghapus item dari keranjang
  const removeItem = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Menghitung total harga
  const totalSpent = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Menangani pengiriman pembayaran
  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    // Data yang bisa dikirim ke API atau disimpan (misalnya ke dalam state global)
    const saleData = {
      customerName,
      contact,
      paymentMethod,
      totalSpent: totalSpent * 1.1,
      orders: cartItems.map((item) => `${item.quantity} x ${item.name} - $${(item.price * item.quantity).toFixed(2)}`).join(', '),
    };

    console.log('Sale Data:', saleData);
    // Setelah konfirmasi pembayaran, bisa diarahkan ke halaman lain atau disimpan
    closeModal(); // Menutup modal setelah pembayaran
  };

  return (
    <div className="w-full lg:w-96 bg-white dark:bg-gray-800 rounded-lg shadow-sm flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 dark:text-sky-400/75 flex items-center gap-2">
        <ShoppingCart size={20} className="text-blue-600 dark:text-blue-400 " />
        <h2 className="text-lg font-semibold">Current Order</h2>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto max-h-80 p-4 space-y-4">
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
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(item.id, 'decrease')}
                className="p-1 rounded-full hover:bg-slate-500 text-red-600 dark:hover:bg-slate-500"
              >
                <Minus size={16} />
              </button>
              <span className="w-8 text-center text-indigo-500">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, 'increase')}
                className="p-1 rounded-full text-orange-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Plus size={16} />
              </button>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500"
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="space-y-3">
          <div className="flex justify-between text-sm dark:text-indigo-400">
            <span>Subtotal</span>
            <span>${totalSpent.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm dark:text-indigo-400">
            <span>Tax (10%)</span>
            <span>${(totalSpent * 0.1).toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold dark:text-indigo-400">
            <span>Total</span>
            <span>${(totalSpent * 1.1).toFixed(2)}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <button
            className="p-2 rounded-lg dark:text-red-700 border border-gray-300 dark:border-gray-600 
                       hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center justify-center gap-2 transition"
            onClick={() => setCartItems([])} // Clear all items
          >
            <Trash2 size={20} className="text-red-600" />
            <span>Clear</span>
          </button>
          <button
            onClick={openModal} // Open the modal when the "Pay" button is clicked
            className="p-2 rounded-lg bg-blue-600 text-white 
                       hover:bg-blue-700 flex items-center justify-center gap-2 transition"
          >
            <CreditCard size={20} />
            <span>Pay</span>
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg w-96 p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Payment Information</h2>
            <form className="mt-4 space-y-4" onSubmit={handlePayment}>
              {/* Customer Field */}
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

              {/* Contact Field */}
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

              {/* Orders Field (Cart items summary) */}
              <div>
                <label className="block text-sm text-gray-600 dark:text-gray-300">Orders</label>
                <textarea
                  value={cartItems.map(item => `${item.quantity} x ${item.name} - $${(item.price * item.quantity).toFixed(2)}`).join('\n')}
                  readOnly
                  className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                />
              </div>

              {/* Total Spent Field */}
              <div>
                <label className="block text-sm text-gray-600 dark:text-gray-300">Total Spent</label>
                <input
                  type="text"
                  value={`$${(totalSpent * 1.1).toFixed(2)}`}
                  readOnly
                  className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                />
              </div>

              {/* Payment Method */}
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

              {/* Buttons */}
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={closeModal} // Close the modal
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
      )}
    </div>
  );
}
