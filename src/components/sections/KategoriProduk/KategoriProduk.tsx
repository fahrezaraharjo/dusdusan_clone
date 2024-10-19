// src/components/sections/KategoriProduk/KategoriProduk.tsx
import { CategoryProduct } from '@/types/Product.types';
import React from 'react';

interface KategoriProdukProps {
  categoriesProduct: CategoryProduct[];
}

const KategoriProduk: React.FC<KategoriProdukProps> = ({ categoriesProduct }) => {
  return (
    <div
      id="category-product"
      className="w-full py-3 px-3"
      style={{
        background: 'linear-gradient(-145deg, #ffffff, #f58120 30%, #ffac67)',
      }}
    >
      <div className="bar text-white text-lg font-bold mb-3">Kategori Produk</div>
      <div className="brands-wrapper grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 justify-between">
        {categoriesProduct.map((category) => (
          <div key={category.id} className="brand w-full cursor-pointer">
            <div
              className="image bg-white rounded-md shadow-md"
              style={{
                width: '100%',
                height: '50px', 
                backgroundImage: `url(${category.imageUrl})`,
                backgroundSize: '60%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                borderRadius: '8px', 
              }}
            />
            <div
              className="label text-white text-center mt-1 text-sm"
              style={{
                width: '100%',
                margin: '10px 0',
                fontSize: '12px',
                fontWeight: '400',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                textAlign: 'center',
              }}
            >
              {category.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KategoriProduk;
