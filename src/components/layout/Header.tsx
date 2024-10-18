import React from 'react';
import { Button } from '../buttons/Button';
import { SearchBar } from '../inputs/SearchBar';
import Image from 'next/image';


const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-50 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image
            src="/assets/LogoCompany.webp" 
            alt="Company Logo"
            width={100}
            height={50}
            className="object-contain"
            priority 
          />
        </div>

        {/* Button Section */}
        <div className="hidden md:flex space-x-4 mt-2 md:mt-0">
          <Button text="Masuk" variant="outlined" />
          <Button text="Daftar" variant="filled" />
        </div>
      </div>

      {/* Search Bar Section */}
      <div className="mt-4">
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
