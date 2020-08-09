const purgeCss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    require('autoprefixer'),
    purgeCss({
      content: ['./src/views/**/*.pug'],
    }),
  ],
};