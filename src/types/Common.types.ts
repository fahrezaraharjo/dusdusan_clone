// src/types/Common.types.ts

export interface ButtonProps {
    text: string;
    variant: 'filled' | 'outlined';
}

export interface NavigationProps {
    categories?: string[];
}

export interface LinkButtonProps {
    text: string;
    href: string;
    variant?: 'yellow' | 'orange';
    className?: string;
}
