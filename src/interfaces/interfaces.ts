
export interface CarouselComponentProps {
    images: string[];
}
export interface ButtonProps {
    text: string;
    variant: 'filled' | 'outlined';
}
export interface NavigationProps {
    categories?: string[];
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
  