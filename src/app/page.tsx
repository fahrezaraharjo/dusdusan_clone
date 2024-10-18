import React from 'react';
import Navigation from '@/components/navigation/Navigation';
import CarouselComponent from '@/components/Carousel/CarouselComponent';
import { categories, images } from '@/data/StaticData';

const Home: React.FC = () => {

  return (
    <div className="max-w-[480px] w-full flex flex-col items-start h-screen">
      <Navigation categories={categories} />
      <div className="flex flex-col items-start w-full h-1/2 mt-1">
        <CarouselComponent images={images} />
      </div>
    </div>
  );
};

export default Home;
