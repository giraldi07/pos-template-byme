// src/components/reports/Pagination.tsx
export default function Pagination({
  currentPage,
  totalItems,
  onPageChange,
}: {
  currentPage: number;
  totalItems: number;
  onPageChange: (page: number) => void;
}) {
  const totalPages = Math.ceil(totalItems / 5);

  return (
    <div className=" dark:text-slate-500 flex justify-center items-center space-x-4 mt-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50"
      >
        Prev
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
