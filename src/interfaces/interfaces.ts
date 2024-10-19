
export interface BannerItem {
    id: number;
    image: string;
    memberTypeID: number;
    name: string;
    publishEndDate: string;
    publishStartDate: string;
    sortNumber: number;
    target: string;
    url: string;
}

export interface BannerResponse {
    banner: {
        memberNonReseller: BannerItem[];
        reseller: null;
        tds: null;
    };
}
export interface ButtonProps {
    text: string;
    variant: 'filled' | 'outlined';
}
export interface NavigationProps {
    categories?: string[];
}
export interface PromoItem {
    code: string;                      // Promo code (optional)
    endDate: string;                  // End date of the promo
    id: number;                       // Unique identifier for the promo
    imagePath: string;                // URL of the promo image
    name: string;                     // Name of the promo
    promotionName: string;            // Display name of the promotion
    rating: string;                   // Rating (optional, can be empty)
    routePrefix: string;              // Route prefix for linking
    standardRetailPrice: number;      // Standard retail price (optional)
    uuid: string;                     // Unique identifier as a UUID
}

export interface PromoSectionProps {
    promoItems: PromoItem[];          // Array of promo items
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
    text: string;
    href: string;
    variant?: 'yellow' | 'orange';
    className?: string;
}
export interface Brand {
    id: number;
    name: string;
    logoUrl: string;
    link: string;
}
export interface BannerSectionProps {
    imageUrl: string;
    altText: string;
    link: string;
}
export interface Product {
    id: number;
    name: string;
    price: string;
    imageUrl: string;
    stockStatus?: string;
    likes?: number;
}

export interface FooterProps {
    company: {
        name: string;
        availabilityDays: string;
        availabilityTime: string;
    };
    support: {
        chat: string;
        email: string;
    };
    socialMedia: {
        name: string;
        url: string;
        icon: string;
    }[];
    address: {
        companyName: string;
        street: string;
        city: string;
        province: string;
    };
    year: number;
}
