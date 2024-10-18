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
  