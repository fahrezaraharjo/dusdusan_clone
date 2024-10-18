import React from 'react';
import Image from 'next/image';
import { Carousel } from 'flowbite-react';
import { CarouselComponentProps } from '@/interfaces/interfaces';
import carouselTheme from './carouselTheme'; // Import the theme

const CarouselComponent: React.FC<CarouselComponentProps> = ({ images }) => {
  return (
    <Carousel slideInterval={5000} theme={carouselTheme} className="rounded-none w-full">
      {images.map((src, index) => (
        <div key={index} className="relative w-full h-full">
          <Image
            src={src}
            layout="fill"
            objectFit="contain"
            alt={`carousel image ${index + 1}`}
            className="rounded-none"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
