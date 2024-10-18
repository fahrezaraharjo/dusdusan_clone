import React from 'react';
import Navigation from '@/components/navigation/Navigation';
import CarouselComponent from '@/components/sections/Carousel/CarouselComponent';
import { categories, images, promoItems } from '@/data/StaticData';
import PromoSection from '@/components/sections/PromoSection/PromoSection';

const Home: React.FC = () => {

  return (
    <div className="max-w-[480px] w-full flex flex-col items-start h-screen">
      {/* navigation section */}
      <Navigation categories={categories} />
      {/* banner section */}
      <div className="flex flex-col items-start w-[480px] h-[485px] mt-1">
        <CarouselComponent images={images} />
      </div>
      {/* promo section */}
      <PromoSection promoItems={promoItems} />

    </div>
  );
};

export default Home;
