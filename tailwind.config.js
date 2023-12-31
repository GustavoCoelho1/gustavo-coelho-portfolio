/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        fontFamily: {
            sans: ['var(--font-ubuntu)', 'sans-serif'],
        },
        extend: {
            backgroundImage: {
                'hero-image': "url('/images/hero-bg.png')",
            },
            fontFamily: {
                mono: ['var(--font-plex-mono)', 'monospace'],
            },
            boxShadow: {
                button: '0px 0px 68px 7px #f8217b66',
            },
        },
    },
    plugins: [],
};
