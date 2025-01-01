
export default function POSCategories() {
  const categories = ['All', 'Electronics', 'Accessories', 'Gadgets', 'Phones'];

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
      <div className="p-2 flex space-x-2">
        {categories.map((category) => (
          <button
            key={category}
            className="px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap
                     hover:bg-gray-100 dark:hover:bg-gray-700
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}