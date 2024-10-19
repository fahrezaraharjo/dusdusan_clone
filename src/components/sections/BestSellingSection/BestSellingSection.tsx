import React from 'react';
import Image from 'next/image';
import { Product } from '@/interfaces/interfaces';

interface BestSellingSectionProps {
  products: Product[];
}

const BestSellingSection: React.FC<BestSellingSectionProps> = ({ products }) => {
  return (
    <div className="category-wrapper">
      <div>
        <div className="highlight" id="best-selling">
          <div className="bar">
            Produk Terlaris
            <div className="link-button" role="button" tabIndex={0}>
              <span className="more">Lihat Semua<i className="anticon anticon-right" /></span>
            </div>
          </div>
          <div className="scrollbar-container ps ps--active-x">
            <div className="best-selling-wrapper">
              {products.length > 0 ? (
                products.map((product) => (
                  <div
                    key={product.id}
                    role="button"
                    tabIndex={0}
                    className="product"
                    style={{
                      borderRadius: '6px',
                      boxShadow: 'rgba(0, 0, 0, 0.25) 0px 4px 4px 0px',
                    }}
                  >
                    <div className="image">
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        layout="fill" 
                        objectFit="cover" 
                        className="rounded-t-lg"
                      />
                    </div>
                    <div className="content">
                      <span className="name">{product.name}</span>
                      <div style={{ flexGrow: 1 }}>
                        <span className="price"><span>{product.price}</span></span>
                        <div className="uom-note list-grid"></div>
                      </div>
                      {product.stockStatus && <span className="status-stock">{product.stockStatus}</span>}
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
    </div>
  );
};

export default BestSellingSection;
