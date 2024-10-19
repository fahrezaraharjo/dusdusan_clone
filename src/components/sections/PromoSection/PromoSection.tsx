import LinkButton from '@/components/common/LinkButton';
import { PromoSectionProps } from '@/interfaces/interfaces';
import Link from 'next/link';
import React, { memo } from 'react';
import Image from 'next/image';

const PromoSection: React.FC<PromoSectionProps> = memo(({ promoItems }) => {
  if (promoItems.length === 0) {
    return <div>No promotions available.</div>;
  }

  return (
    <div className="mt-5 flex items-center w-full justify-center">
      <div className="bg-white rounded-lg p-4 shadow-lg w-full">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-semibold text-gray-800">Promo</span>
          <LinkButton text="Lihat Semua" href="/promo" variant="orange" />
        </div>
        <div className="overflow-x-auto scrollbar-hidden">
          <div className="flex space-x-4 py-2">
            {promoItems.map((item, index) => (
              <div key={item.id} className="flex-none w-32 transition-transform duration-200 hover:scale-105">
                <Link href={`/promoDetail/${item.id}`} passHref>
                  <div className="relative w-full h-40 rounded-md shadow-md border border-gray-300 transition-shadow duration-200 hover:shadow-xl">
                    <Image
                      src={item.imagePath}
                      alt={item.promotionName}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                      priority={index === 0} 
                      loading={index === 0 ? undefined : "lazy"} 
                      placeholder="blur"
                      blurDataURL={item.imagePath}
                      onError={(e) => {
                        e.currentTarget.src = '/path/to/placeholder/image.jpg';
                      }}
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

PromoSection.displayName = "PromoSection";

export default PromoSection;
