
export interface CarouselComponentProps {
    images: string[];
}
export interface ButtonProps {
    text: string;
    variant: 'filled' | 'outlined';
}
export interface NavigationProps {
    categories?: string[]; // Make categories optional
}
export interface PromoItem {
    id: number;
    imageUrl: string;
    detailLink: string;
}
export interface PromoSectionProps {
    promoItems: PromoItem[];
}
export interface CategoryProduct {
    id: number;
    name: string;
    imageUrl: string;
}

export interface MenarikArticle {
    id: number;
    imageUrl: string;
    category: string;
    title: string;
    date: string;
}

export interface LinkButtonProps {
    text: string; // Dynamic text like "Lihat Semua" or "Lihat Lebih Banyak"
    href: string; // The link URL
    variant?: 'yellow' | 'orange'; // Variants for different styles
    className?: string; // Optional additional classes
}
export interface Brand {
    id: number;
    name: string;
    logoUrl: string;
    link: string;
}
