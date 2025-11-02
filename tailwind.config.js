/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#A8DADC', // Verde menta
                secondary: '#F4A261', // Rosa suave
                neutral: '#F7F3E9', // Beige claro
                accent: '#2A9D8F', // Verde oscuro
                support: '#FFFFFF', // Blanco
                gray: '#D3D3D3', // Gris claro
            },
            fontFamily: {
                primary: ['Playfair Display', 'serif'],
                secondary: ['Roboto', 'sans-serif'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}