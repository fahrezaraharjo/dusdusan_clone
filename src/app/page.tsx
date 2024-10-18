import React from 'react';
import Header from '@/components/layout/Header';
import Navigation from '@/components/navigation/Navigation';
import Banner from '@/components/banner/Banner'; // Import the Banner component

const Home: React.FC = () => {
  const categories = ['PROMO', 'KATEGORI', 'TERPILIH', 'TERLARIS', 'TERPOPULER', 'TERBARU'];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="bg-[#000] max-w-[480px] w-full rounded shadow-lg flex flex-col items-center flex-wrap">
        <Header />
        <Navigation categories={categories} />

        {/* Banner Section */}
        <section aria-label="Homepage Banner" className="w-full mt-4 flex items-center justify-center">
          <Banner /> {/* Use the Banner component here */}
        </section>
      </div>
    </div>
  );
};

export default Home;
