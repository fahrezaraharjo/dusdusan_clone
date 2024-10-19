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
import Footer from '@/components/sections/ButtomSection/BottomSection';

const Home: React.FC = () => {
  const companyInfo = {
    name: 'Dusdusan.com',
    availabilityDays: 'Senin - Minggu',
    availabilityTime: '08.00 - 17.00 WIB',
  };

  const supportInfo = {
    chat: 'Live Chat Dusdusan.com',
    email: 'support@dusdusan.com',
  };

  const socialMediaLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/dusdusan/',
      icon: '/assets/images/d4cfe361eb6342f185931e9996e15f29.png',
    },
    {
      name: 'Facebook',
      url: 'https://web.facebook.com/DusdusanID',
      icon: '/assets/images/9bad4abb1922821a55f1f84071156093.png',
    },
    {
      name: 'TikTok',
      url: 'https://vt.tiktok.com/ZSJj9Q8sT/',
      icon: '/assets/images/499d0f4d5ed7ec5fc6eabd1fe8534c3c.png',
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/DusdusanID',
      icon: '/assets/images/d53b69b350197784eefb482350e0d961.png',
    },
  ];

  const addressInfo = {
    companyName: 'PT DUSDUSAN DOTCOM INDONESIA',
    street: 'Jl. Kebon Jeruk Raya 1A, 1B, 1C',
    city: 'Kota Adm. Jakarta Barat',
    province: 'Prov. DKI Jakarta',
  };

  const currentYear = new Date().getFullYear();

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
      {/*footer*/}
      <div className='mt-1'>
        <Footer
          company={companyInfo}
          support={supportInfo}
          socialMedia={socialMediaLinks}
          address={addressInfo}
          year={currentYear}
        />
      </div>
    </div>
  );
};

export default Home;
