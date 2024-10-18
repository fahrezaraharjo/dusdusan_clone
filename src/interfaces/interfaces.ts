// src/interfaces/interfaces.ts

export interface CarouselComponentProps {
    images: string[];
}


export interface ButtonProps {
    text: string;
    variant: 'filled' | 'outlined';
}

// NavigationTypes.ts
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