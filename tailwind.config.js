module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#5E17EB'
            },
            fontFamily: {
                'serif': 'Merriweather',
                'sans': 'Merriweather Sans'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
