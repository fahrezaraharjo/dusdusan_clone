"use client";

import React, { memo } from 'react';
import Image from 'next/image';
import { Carousel } from 'flowbite-react';
import Skeleton from 'react-loading-skeleton'; 
import 'react-loading-skeleton/dist/skeleton.css'; 
import carouselTheme from './carouselTheme'; 

const CarouselComponent: React.FC<{ images: Array<{ image: string }> }> = ({ images }) => {
    return (
        <Carousel slideInterval={5000} theme={carouselTheme} className="w-full h-full">
            {images.length > 0 ? (
                images.map((item, index) => (
                    <CarouselImage key={index} src={item.image} index={index} />
                ))
            ) : (
                <Skeleton height={485} width="100%" />
            )}
        </Carousel>
    );
};

const CarouselImage: React.FC<{ src: string; index: number }> = memo(({ src, index }) => {
    return (
        <div className="relative w-full h-full">
            <Image
                src={src}
                layout="fill"
                objectFit="cover"
                alt={`carousel image ${index + 1}`}
                quality={75}
                sizes="(max-width: 640px) 100vw, (min-width: 641px) 50vw"
                priority={index === 0}
                placeholder="blur"
                blurDataURL="/path/to/placeholder-image.jpg"
                loading={index === 0 ? undefined : "lazy"}
                onError={(e) => {
                    e.currentTarget.src = '/path/to/placeholder/image.jpg'; 
                }}
            />
        </div>
    );
});

CarouselImage.displayName = 'CarouselImage';

export default CarouselComponent;
