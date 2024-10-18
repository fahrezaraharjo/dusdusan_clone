import React from 'react';
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <Image
        src="/assets/LogoCompany.webp" // Path ke image di folder public/assets/
        alt="Company Logo"
        width={100}
        height={50}
        className="object-contain"
        priority // Prioritas untuk memuat gambar lebih cepat
      />
    </div>
  );
};

export default Logo;
