"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

export const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className="relative">
      {/* Icon Search */}
      <div className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500">
        <FontAwesomeIcon icon={faSearch} />
      </div>

      {/* Input Field */}
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Cari barang kamu di sini..."
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 h-8 mt-1"
        aria-label="Search bar"
      />

      {/* Optional Close Button */}
      {searchTerm && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <button
            onClick={handleClearSearch}
            className="text-sm text-white bg-red-500 p-1 rounded hover:bg-red-600 transition"
            aria-label="Clear search"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      )}
    </div>
  );
};
