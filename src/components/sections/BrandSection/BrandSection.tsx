// @/components/sections/BrandSection/BrandSection.tsx
import { Brand } from '@/interfaces/interfaces';
import React from 'react';
import LinkButton from '@/components/common/LinkButton';
import BrandCard from './BrandCard';

interface BrandSectionProps {
    brands: Brand[];
}

const BrandSection: React.FC<BrandSectionProps> = ({ brands }) => {
    return (
        <div id="brand">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Brand Terpilih</h2>
                <LinkButton text="Lihat Semua" href="/semua-brand" variant="orange" />
            </div>
            <div className="flex overflow-x-auto space-x-2 py-2 scrollbar-hide">
                {brands.map((brand) => (
                    <BrandCard key={brand.id} brand={brand} />
                ))}
            </div>
        </div>
    );
};

export default BrandSection;
