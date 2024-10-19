// src/types/Footer.types.ts

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
export interface FooterNavItemProps {
    icon: JSX.Element;
    label: string;
    active: string;
    setActive: (label: string) => void;
  }