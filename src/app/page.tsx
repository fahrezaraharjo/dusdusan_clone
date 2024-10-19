import React from 'react';
import Navigation from '@/components/navigation/Navigation';
import CarouselComponent from '@/components/sections/Carousel/CarouselComponent';
import { bestSellingProducts, brands, categories, categoriesProduct, images, menarikArticles, newProducts, popularProducts, promoItems } from '@/data/StaticData';
import PromoSection from '@/components/sections/PromoSection/PromoSection';
import KategoriProduk from '@/components/sections/KategoriProduk/KategoriProduk';
import MenarikUntukDisimak from '@/components/sections/MenarikUntukDisimak/MenarikUntukDisimak';
import BrandSection from '@/components/sections/BrandSection/BrandSection';
import BannerSection from '@/components/sections/BannerSection/BannerSection';
import ProductSection from '@/components/sections/ProductSection/ProductSection';
import InfoSection from '@/components/sections/InfoSection/InfoSection';

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
      {/* Banner Section  */}
      <BannerSection
        imageUrl="/assets/banner.webp"
        altText="Promotional Banner"
        link="https://ddcmart.com/"
      />
      {/* Produk Section */}
      <ProductSection
        title="Produk Terlaris"
        backgroundClass="bg-gradient-to-tr from-teal-300 to-teal-500"
        products={bestSellingProducts}
        viewAllLink="/semua-produk"
      />
      <ProductSection
        title="Produk Terpopular"
        backgroundClass="bg-white"
        products={popularProducts}
        viewAllLink="/semua-produk"
      />
      <ProductSection
        title="Produk Terbaru"
        backgroundClass="bg-white"
        products={newProducts}
        viewAllLink="/semua-produk"
      />
      {/* Info Section */}
      <div className="flex flex-col items-start w-[480px] h-[485px] mt-1 ">
        <InfoSection /> 
      </div>
    </div>
  );
};

export default Home;
