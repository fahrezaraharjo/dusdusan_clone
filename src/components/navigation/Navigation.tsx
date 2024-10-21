"use client"; // Ensure this component is a Client Component

import { NavigationProps } from '@/types/Common.types';
import React, { memo } from 'react';

const Navigation: React.FC<NavigationProps> = memo(({ categories = [] }) => {
  const handleCategoryClick = (category: string) => {
    alert(`${category} clicked`); 
  };

  return (
    <nav className="relative z-6 w-full bg-[#01b0b9] h-8 overflow-hidden">
      <div className="w-full flex justify-between items-center px-1 h-full"> 
        {categories.map((category) => (
          <div
            key={category}
            className="p-1 text-white font-bold text-xs cursor-pointer transition-colors duration-200 hover:bg-teal-700 focus:bg-teal-800 focus:outline-none"
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && handleCategoryClick(category)} 
            onClick={() => handleCategoryClick(category)} 
            aria-label={category} 
          >
            {category}
          </div>
        ))}
      </div>
    </nav>
  );
});

Navigation.displayName = "Navigation";

Navigation.defaultProps = {
  categories: ['PROMO', 'KATEGORI', 'TERPILIH', 'TERLARIS', 'TERPOPULER', 'TERBARU'],
};

export default Navigation;
