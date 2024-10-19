import React from 'react';
import Image from 'next/image';
import { Product } from '@/interfaces/interfaces';
import LinkButton from '@/components/common/LinkButton';

interface ProductSectionProps {
  title: string;
  backgroundClass: string;
  products: Product[];
  viewAllLink: string;
}

const ProductSection: React.FC<ProductSectionProps> = ({ title, backgroundClass, products, viewAllLink }) => {
  return (
    <div className="w-full">
      <div className={`${backgroundClass} product-section-wrapper`} id="product-section">
        <div className="flex justify-between items-center font-bold text-black text-sm px-4 py-5">
          {title}
          <LinkButton text="Lihat Semua" href={viewAllLink} variant="orange" />
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
                    <span className="name font-semibold text-lg text-gray-900 mb-2 h-12 overflow-hidden text-ellipsis break-words line-clamp-2">
                      {product.name}
                    </span>
                    <div className="flex-grow">
                      <span className="price text-sm text-orange-400">{product.price}</span>
                    </div>
                    {product.stockStatus && (
                      <span
                        className={`stock-status text-xs mt-1 ${
                          product.stockStatus === 'In Stock' ? 'text-green-600' : 'text-red-500'
                        }`}
                      >
                        {product.stockStatus}
                      </span>
                    )}
                    {product.likes && (
                      <span className="likes text-xs mt-1 text-gray-500">
                        {product.likes} Likes
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

export default ProductSection;
