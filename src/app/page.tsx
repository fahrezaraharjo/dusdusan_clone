import React from 'react';
import Navigation from '@/components/navigation/Navigation';
import CarouselComponent from '@/components/sections/Carousel/CarouselComponent';
import { brands, categories, categoriesProduct, images, menarikArticles, promoItems } from '@/data/StaticData';
import PromoSection from '@/components/sections/PromoSection/PromoSection';
import KategoriProduk from '@/components/sections/KategoriProduk/KategoriProduk';
import MenarikUntukDisimak from '@/components/sections/MenarikUntukDisimak/MenarikUntukDisimak';
import BrandSection from '@/components/sections/BrandSection/BrandSection';

const Home: React.FC = () => {

  return (
    <div className="max-w-[480px] w-full flex flex-col items-start">
      {/* navigation section */}
      <Navigation categories={categories} />
      {/* banner section */}
      <div className="flex flex-col items-start w-[480px] h-[485px] mt-1">
        <CarouselComponent images={images} />
      </div>
      {/* promo section */}
      <PromoSection promoItems={promoItems} />
      {/* kategori produk */}
      <KategoriProduk categoriesProduct={categoriesProduct} />
      {/* Menarik untuk disimak */}
      <MenarikUntukDisimak articles={menarikArticles} />
      {/* Brand Terpilih */}
      <BrandSection brands={brands} />

    </div>
  );
};

export default Home;
