module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {
            transitionProperty: {},
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
