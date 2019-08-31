const { override, addPostcssPlugins, disableEsLint } = require('customize-cra');
const tailwind = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss');
const { join } = require('path');

const purgecssConfig = purgecss({
  content: ['./src/**/*.jsx', './src/**/*.js', './public/index.html'],
  css: ['./src/index.css'],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

module.exports = override(
  disableEsLint(),

  addPostcssPlugins([
    tailwind(join(__dirname, './tailwind.config.js')),
    require('postcss-nested'),
    require('autoprefixer'),

    // apply purgecss on production build
    ...(process.env.NODE_ENV === 'production' ? [purgecssConfig] : []),
  ])
);
