import { Minus, Plus, X } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface POSCartItemProps {
  item: CartItem;
  updateQuantity: (id: string, action: 'increase' | 'decrease') => void;
  removeItem: (id: string) => void;
}

export default function POSCartItem({
  item,
  updateQuantity,
  removeItem,
}: POSCartItemProps) {
  return (
    <div className="flex items-center gap-3 p-4 border rounded-lg shadow-sm dark:border-gray-700">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 rounded-lg object-cover"
      />
      <div className="flex-1">
        <h3 className="font-medium text-gray-900 dark:text-gray-100">
          {item.name}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          ${item.price.toFixed(2)}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => updateQuantity(item.id, 'decrease')}
          className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <Minus size={16} />
        </button>
        <span className="w-8 text-center">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, 'increase')}
          className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
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
  );
}
