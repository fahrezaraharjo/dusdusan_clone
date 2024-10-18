"use client"; // Ensure this component is a Client Component

import React, { memo } from 'react';
import { NavigationProps } from './NavigationTypes'; // Import the interface

const Navigation: React.FC<NavigationProps> = memo(({ categories = [] }) => { // Default to an empty array
  const handleCategoryClick = (category: string) => {
    alert(`${category} clicked`); // Example action for demonstration
  };

  return (
    <nav className="relative z-6 w-full bg-[#01b0b9] h-8 overflow-hidden"> {/* Reduced height */}
      <div className="w-full flex justify-between items-center px-1 h-full"> {/* Adjusted padding */}
        {categories.map((category) => (
          <div
            key={category}
            className="category p-1 text-white font-bold text-xs cursor-pointer transition-colors duration-200 hover:bg-teal-700 focus:bg-teal-800 focus:outline-none"
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && handleCategoryClick(category)} // Example action
            onClick={() => handleCategoryClick(category)} // Example action
            aria-label={category} // Accessibility
          >
            {category}
          </div>
        ))}
      </div>
    </nav>
  );
});

// Add display name for the component
Navigation.displayName = "Navigation";

// Default props for the categories, can be overridden if needed
Navigation.defaultProps = {
  categories: ['PROMO', 'KATEGORI', 'TERPILIH', 'TERLARIS', 'TERPOPULER', 'TERBARU'],
};

export default Navigation;
