// src/types/Banner.types.ts

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

export interface BannerSectionProps {
    imageUrl: string;
    altText: string;
    link: string;
}
