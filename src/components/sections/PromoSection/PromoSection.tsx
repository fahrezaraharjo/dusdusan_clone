// PromoSection.tsx
import LinkButton from '@/components/common/LinkButton';
import { PromoSectionProps } from '@/interfaces/interfaces';
import React from 'react';

const PromoSection: React.FC<PromoSectionProps> = ({ promoItems }) => {
  return (
    <div className="mt-5 flex items-center w-full justify-center">
      <div className="bg-white rounded-lg p-4 shadow-lg w-full">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-semibold text-gray-800">Promo</span>
          <LinkButton text="Lihat Semua" href="/promo" variant="orange" />
        </div>
        <div className="overflow-x-auto scrollbar-hidden">
          <div className="flex space-x-4 py-2">
            {promoItems.map(item => (
              <div key={item.id} className="flex-none w-32 transition-transform duration-200 hover:scale-105">
                <a href={`promoDetail/${item.id}`}>
                  <div
                    className="bg-cover bg-center rounded-md shadow-md border border-gray-300 transition-shadow duration-200 hover:shadow-xl"
                    style={{
                      backgroundImage: `url(${item.imageUrl})`,
                      height: '150px',
                    }}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoSection;
