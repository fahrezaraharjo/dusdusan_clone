// @/components/sections/BrandSection/BrandCard.tsx
import React from 'react';
import Image from 'next/image';
import { Brand } from '@/interfaces/interfaces';

interface BrandCardProps {
    brand: Brand;
}

const BrandCard: React.FC<BrandCardProps> = ({ brand }) => {
    return (
        <a href={brand.link} className="flex-shrink-0 w-1/4"> 
            <div className="flex flex-col bg-white shadow-md rounded-md overflow-hidden transition-transform transform hover:scale-105">
                <Image
                    src={brand.logoUrl}
                    className="min-h-16 object-contain bg-gray-200"
                    alt={brand.name}
                    width={100}
                    height={60}
                    layout="intrinsic"
                    priority={false}
                />
                <div className="text-center text-sm text-gray-800 py-1">{brand.name}</div> 
            </div>
        </a>
    );
};

export default BrandCard;
