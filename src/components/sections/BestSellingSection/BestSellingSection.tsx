import React from 'react';
import Image from 'next/image';
import { Product } from '@/interfaces/interfaces';
import LinkButton from '@/components/common/LinkButton';

interface BestSellingSectionProps {
  products: Product[];
}

const BestSellingSection: React.FC<BestSellingSectionProps> = ({ products }) => {
  return (
    <div className="w-full">
      {/* Apply the gradient background */}
      <div className="highlight bg-gradient-to-tr from-teal-300 to-teal-500" id="best-selling">
        <div className="flex justify-between items-center font-bold text-white text-sm px-4 py-5">
          Produk Terlaris
          <LinkButton text="Lihat Semua" href="/semua-brand" variant="orange" />

        </div>

        <div className="flex overflow-x-auto space-x-2 py-2 scrollbar-hide">
          <div className="flex space-x-4 p-4">
            {products.length > 0 ? (
              products.map((product) => (
                <div
                  key={product.id}
                  role="button"
                  tabIndex={0}
                  className="product flex flex-col w-48 bg-white rounded-lg shadow-md cursor-pointer"
                >
                  {/* Product Image */}
                  <div className="relative w-full h-48 rounded-t-lg overflow-hidden">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="absolute inset-0 z-1"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="p-3 flex flex-col flex-grow">
                    {/* Styling for the product name */}
                    <span className="name font-semibold text-lg text-gray-900 mb-2 h-12 overflow-hidden text-ellipsis break-words line-clamp-2">
                      {product.name}
                    </span>
                    <div className="flex-grow">
                      {/* Product price */}
                      <span className="price text-sm text-orange-400">{product.price}</span>
                    </div>
                    {/* Stock status with improved styling */}
                    {product.stockStatus && (
                      <span className={`stock-status text-xs mt-1 ${product.stockStatus === 'In Stock' ? 'text-green-600' : 'text-red-500'}`}>
                        {product.stockStatus}
                      </span>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div>No products available</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellingSection;
