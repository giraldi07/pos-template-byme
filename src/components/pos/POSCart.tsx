import { Trash2, CreditCard, ShoppingCart } from 'lucide-react';
import POSCartItem from './POSCartItem';
import PaymentModal from '../modals/PaymentModal';
import { useState } from 'react';

export default function POSCart() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const updateQuantity = (id: string, action: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: action === 'increase' ? item.quantity + 1 : Math.max(item.quantity - 1, 1),
            }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalSpent = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    const saleData = {
      customerName,
      contact,
      paymentMethod,
      totalSpent: totalSpent * 1.1,
      orders: cartItems
        .map((item) => `${item.quantity} x ${item.name} - $${(item.price * item.quantity).toFixed(2)}`)
        .join(', '),
    };
    console.log('Sale Data:', saleData);
    closeModal();
  };

  return (
    <div className="w-full lg:w-96 bg-white dark:bg-gray-800 rounded-lg shadow-sm flex flex-col">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center gap-2">
        <ShoppingCart size={20} className="text-blue-600 dark:text-blue-400" />
        <h2 className="text-lg font-semibold">Current Order</h2>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {cartItems.map((item) => (
          <POSCartItem
            key={item.id}
            item={item}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
          />
        ))}
      </div>
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>${totalSpent.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Tax (10%)</span>
            <span>${(totalSpent * 0.1).toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>${(totalSpent * 1.1).toFixed(2)}</span>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <button
            className="p-2 rounded-lg dark:text-red-700 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center justify-center gap-2 transition"
            onClick={() => setCartItems([])}
          >
            <Trash2 size={20} className="text-red-600" />
            <span>Clear</span>
          </button>
          <button
            className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 flex items-center justify-center gap-2 transition"
            onClick={openModal}
          >
            <CreditCard size={20} />
            <span>Pay</span>
          </button>
        </div>
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={closeModal}
        customerName={customerName}
        setCustomerName={setCustomerName}
        contact={contact}
        setContact={setContact}
        cartItems={cartItems}
        totalSpent={totalSpent}
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
        handlePayment={handlePayment}
      />
    </div>
  );
}
