module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        darkBlue: '#162b44', // Dark Blue
        navyBlue: '#344A70', // Navy Blue
        blueGrotto: '#386E90', // Blue grotto
        spearMint: '#87B1B0', // Spearmint
        slate: '#CDD3D0', // Slate
        crimson: '#E60027',
      },
      fontFamily: {
        title: ['Kaushan Script'],
        body: ['Open Sans'],
      },
      transitionDuration: ['hover', 'focus'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
