// src/types/Product.types.ts

export interface Product {
    id: number;
    name: string;
    price: string;
    imageUrl: string;
    stockStatus?: string;
    likes?: number;
}

export interface ProductSectionProps {
    title: string;
    backgroundClass: string;
    products: Product[];
    viewAllLink: string;
}

export interface CategoryProduct {
    id: number;
    name: string;
    imageUrl: string;
}
