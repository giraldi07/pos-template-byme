import { Plus } from 'lucide-react';

export default function POSProductCard() {
  const products = [
    {
      id: '1',
      name: 'Wireless Earbuds',
      price: 99.99,
      category: 'Accessories',
      description: 'High-quality sound and long battery life.',
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=400',
    },
    {
      id: '2',
      name: 'Smart Watch',
      price: 199.99,
      category: 'Wearables',
      description: 'Track your health and stay connected.',
      image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=400',
    },
    {
      id: '3',
      name: 'Laptop',
      price: 799.99,
      category: 'Electronics',
      description: 'Fast, reliable, and portable computing.',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=400',
    },
    {
      id: '4',
      name: 'Gaming Mouse',
      price: 59.99,
      category: 'Accessories',
      description: 'Precision and comfort for gaming.',
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=400',
    },
    {
      id: '5',
      name: 'Bluetooth Speaker',
      price: 49.99,
      category: 'Audio',
      description: 'Portable, powerful sound.',
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=400',
    },
    {
      id: '6',
      name: 'Smartphone',
      price: 699.99,
      category: 'Electronics',
      description: 'Latest technology at your fingertips.',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=400',
    },
    {
      id: '7',
      name: 'Portable Charger',
      price: 29.99,
      category: 'Accessories',
      description: 'Keep your devices powered on the go.',
      image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&q=80&w=400',
    },
    {
      id: '8',
      name: 'Wireless Keyboard',
      price: 89.99,
      category: 'Accessories',
      description: 'Ergonomic design for long typing sessions.',
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=400',
    },
    {
      id: '9',
      name: 'Digital Camera',
      price: 499.99,
      category: 'Electronics',
      description: 'Capture every moment in high quality.',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400',
    },
    {
      id: '10',
      name: 'Smart Home Hub',
      price: 149.99,
      category: 'Home Automation',
      description: 'Control your home with just your voice.',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=400',
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