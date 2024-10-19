// src/types/Promo.types.ts

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
