module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-postcss',
      option: {
        postCssPlugins: [require('tailwindcss'), require('autoprefixer')]
      }
    }
  ],
};
