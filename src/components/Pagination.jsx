import { useState } from "react";

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  // Handle next page
  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  // Handle previous page
  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="flex items-center space-x-4">
      {/* Left Arrow */}
      <button
        onClick={prevPage}
        disabled={currentPage === 1}
        className="px-3 py-1 bg-gray-300 text-black rounded disabled:opacity-50 cursor-pointer"
      >
        ←
      </button>

      {/* Page Number */}
      <span className="text-lg font-bold">{currentPage}</span>

      {/* Right Arrow */}
      <button
        onClick={nextPage}
        disabled={currentPage === totalPages}
        className="px-3 py-1 bg-gray-300 text-black rounded disabled:opacity-50 cursor-pointer"
      >
        →
      </button>
    </div>
  );
};

export default Pagination;
