import { BannerSectionProps } from '@/interfaces/interfaces';
import Image from 'next/image';
import React from 'react';

const BannerSection: React.FC<BannerSectionProps> = ({ imageUrl, altText, link }) => {
    return (
        <div className="category-wrapper px-5 py-3">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <Image
                    src={imageUrl}
                    alt={altText}
                    className="w-full rounded-lg cursor-pointer"
                    width={480} 
                    height={240} 
                    priority 
                />
            </a>
        </div>
    );
};

export default BannerSection;