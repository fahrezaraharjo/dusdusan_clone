"use client";

import React from 'react';
import useSWR from 'swr';
import Navigation from '@/components/navigation/Navigation';
import CarouselComponent from '@/components/sections/Carousel/CarouselComponent';
import PromoSection from '@/components/sections/PromoSection/PromoSection';
import { categories, categoriesProduct, brands, newProducts, popularProducts, companyInfo, supportInfo, socialMediaLinks, addressInfo, currentYear, bestSellingProducts } from '@/data/StaticData';
import KategoriProduk from '@/components/sections/KategoriProduk/KategoriProduk';
import MenarikUntukDisimak from '@/components/sections/MenarikUntukDisimak/MenarikUntukDisimak';
import BrandSection from '@/components/sections/BrandSection/BrandSection';
import BannerSection from '@/components/sections/BannerSection/BannerSection';
import ProductSection from '@/components/sections/ProductSection/ProductSection';
import InfoSection from '@/components/sections/InfoSection/InfoSection';
import Footer from '@/components/sections/ButtomSection/BottomSection';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const fetcher = (url: string) => fetch(url).then(res => res.json());

const Home: React.FC = () => {
  const { data: promoData, error: promoError } = useSWR('https://apigateway.dusdusan.com/promoBanner/home', fetcher);
  const { data: carouselData, error: carouselError } = useSWR('https://apigateway.dusdusan.com/homepageContent', fetcher);
  const { data: articlesData, error: articlesError } = useSWR('https://apigateway.dusdusan.com/articles?limit=5&orderby=publishDate&sortby=desc', fetcher);

  const isPromoLoading = !promoData;
  const isCarouselLoading = !carouselData;
  const isArticlesLoading = !articlesData;
  const isLoading = isPromoLoading || isCarouselLoading || isArticlesLoading;
  

  // Handle errors
  if (promoError || carouselError || articlesError) {
    return <div>Error loading data. Please try again later.</div>;
  }

  return (
    <div className="max-w-[480px] w-full flex flex-col items-start">
      {/* Navigation Section */}
      {isLoading ? (
        <Skeleton height={50} width="100%" className="mb-2" />
      ) : (
        <Navigation categories={categories} />
      )}

      {/* Banner Section */}
      <div className="flex flex-col items-start w-full h-[485px] mt-1">
        {isCarouselLoading ? (
          <Skeleton height={485} width="100%" />
        ) : (
          <CarouselComponent images={carouselData.banner.memberNonReseller} />
        )}
      </div>

      {/* Promo Section */}
      {isPromoLoading ? (
        <Skeleton height={200} width="100%" className="mt-4" />
      ) : (
        <PromoSection promoItems={promoData.data} />
      )}

      {/* Kategori Produk */}
      {isLoading ? (
        <Skeleton height={50} width="100%" className="mb-2" />
      ) : (
        <KategoriProduk categoriesProduct={categoriesProduct} />
      )}

      {/* Menarik untuk disimak */}
      {isLoading ? (
        <Skeleton height={50} width="100%" className="mb-2" />
      ) : (
        <MenarikUntukDisimak articles={articlesData.data} />
      )}

      {/* Brand Terpilih */}
      {isLoading ? (
        <Skeleton height={50} width="100%" className="mb-2" />
      ) : (
        <BrandSection brands={brands} />
      )}

      {/* Banner Section */}
      {isLoading ? (
        <Skeleton height={200} width="100%" className="mt-4" />
      ) : (
        <BannerSection
          imageUrl="/assets/banner.webp"
          altText="Promotional Banner"
          link="https://ddcmart.com/"
        />
      )}

      {/* Produk Sections */}
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
      <div className="flex flex-col items-start w-full h-[485px] mt-1 ">
        {isLoading ? (
          <Skeleton height={485} width="100%" />
        ) : (
          <InfoSection />
        )}
      </div>

      {/* Footer */}
      <div className='mt-1'>
        {isLoading ? (
          <Skeleton height={100} width="100%" className="mb-2" />
        ) : (
          <Footer
            company={companyInfo}
            support={supportInfo}
            socialMedia={socialMediaLinks}
            address={addressInfo}
            year={currentYear}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
