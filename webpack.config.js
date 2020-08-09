const HtmlWebpackPlugin = require('html-webpack-plugin');
const GoogleFontsPlugin = require('@beyonk/google-fonts-webpack-plugin');
const config = {
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ['pug-loader'],
      },
      {
        test: /\/assets\//i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        }
      },
    ],
  },
  plugins: [
    new GoogleFontsPlugin({
      fonts: [
        {
          family: 'Lobster Two',
          variants: ['700italic'],
        },
        {
          family: 'Raleway',
          variants: ['400', '600'],
        },
        {
          family: 'Inconsolata',
        }
      ],
      filename: 'assets/fonts/fonts.css',
    })
  ],
};

module.exports = (env, argv) => {
  const cssRule = {
    test: /\.scss$/,
    use: ['css-loader', 'postcss-loader', 'sass-loader'],
  };
  switch (argv.mode) {
    case 'development': {
      config.devServer = { port: 8080 };
      cssRule.use.unshift('style-loader');
      config.module.rules.push(cssRule);
      config.plugins.push(
        new HtmlWebpackPlugin({
          template: 'src/views/index.pug',
          templateParameters: async () => await require('./test/mockAnswers')(),
          filename: 'index.html',
        }),
      );
      break;
    }
    case 'production': {
      cssRule.use.unshift({ loader: 'file-loader', options: { name: 'assets/css/main.css' } }, 'extract-loader');
      config.module.rules.push(cssRule);
      config.plugins.push(
        new HtmlWebpackPlugin({
          template: 'src/views/index.pug',
          templateParameters: async () => await require('./lib/getAnswers')(),
          filename: 'index.html',
        }),
      );
    }
  }
  return config;
};
