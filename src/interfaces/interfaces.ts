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
    code: string;
    endDate: string;
    id: number;
    imagePath: string;
    name: string;
    promotionName: string;
    rating: string;
    routePrefix: string;
    standardRetailPrice: number;
    uuid: string;
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
    id: string;
    name: string;
    imagePath: string;
    publishDate: string;
    category: {
        categoryId: string;
        categoryName: string;
    };
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
