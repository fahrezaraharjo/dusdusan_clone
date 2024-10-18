import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#01b0b9",
        secondary: "#ff5733",
        accent: "#4caf50",
      },
      spacing: {
        '100': '25rem',
        '120': '30rem',
        'extra-small': '0.5rem',
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
      },
      borderRadius: {
        '4xl': '2rem',
        'full': '9999px', // Added for circular elements
      },
      boxShadow: {
        'custom': '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
    },
  },
  plugins: [
    flowbite.plugin(),

  ],
};

export default config;
