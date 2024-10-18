"use client";

import React from 'react';
import Image from 'next/image';
import { Carousel } from 'flowbite-react';
import { CarouselComponentProps } from '@/interfaces/interfaces';
import carouselTheme from './carouselTheme'; 

const CarouselComponent: React.FC<CarouselComponentProps> = ({ images }) => {
  return (
    <Carousel slideInterval={5000} theme={carouselTheme} className="rounded-none w-full h-full">
      {images.map((src, index) => {
        return (
          <div key={index} className="relative w-full h-full">
            <Image
              src={src}
              layout="fill" 
              objectFit="cover" 
              alt={`carousel image ${index + 1}`}
              className="rounded-none"
              quality={75}
              sizes="(max-width: 640px) 100vw, (min-width: 641px) 50vw" 
              priority={index === 0} 
              placeholder="blur" 
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyI..." 
              unoptimized={false}
            />
          </div>
        );
      })}
    </Carousel>
  );
};

export default CarouselComponent;
