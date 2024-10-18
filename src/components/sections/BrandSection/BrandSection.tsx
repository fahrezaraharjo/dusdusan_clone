// @/components/sections/BrandSection/BrandSection.tsx
import { Brand } from '@/interfaces/interfaces';
import React from 'react';

interface BrandSectionProps {
  brands: Brand[];
}

const BrandSection: React.FC<BrandSectionProps> = ({ brands }) => {
  return (
    <div id="brand" className="max-w-[480px] w-full flex flex-col items-start">
      <div className="bar flex justify-between items-center w-full mb-4">
        <h2>Brand Terpilih</h2>
        <div role="button" tabIndex={0} style={{ outline: 'none' }}>
          <span className="more">Lihat Semua <i className="anticon anticon-right" /></span>
        </div>
      </div>
      <div className="brands-wrapper flex flex-wrap justify-start">
        {brands.map((brand) => (
          <a key={brand.id} href={brand.link} className="flex items-center justify-center w-1/2 p-2">
            <div className="brand-shadow bg-white rounded shadow-md overflow-hidden">
              <img src={brand.logoUrl} className="image object-cover h-20 w-full" alt={brand.name} />
              <div className="label text-center p-2">{brand.name}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BrandSection;
