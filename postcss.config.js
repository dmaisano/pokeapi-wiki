const tailwind = require('tailwindcss');
const { join } = require('path');

module.exports = {
  plugins: [
    tailwind(join(__dirname, './tailwind.config.js')),
    require('autoprefixer'),
  ],
};
