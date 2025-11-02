/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#ec4899', // pink-500
                secondary: '#6b7280', // gray-500
            },
            fontFamily: {
                playfair: ['Playfair Display', 'serif'],
                roboto: ['Roboto', 'sans-serif'],
            },
        },
    },
    plugins: [
        typography,
    ],
}