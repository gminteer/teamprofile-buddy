const HtmlWebpackPlugin = require('html-webpack-plugin');
const GoogleFontsPlugin = require('@beyonk/google-fonts-webpack-plugin');
const config = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.pug$/,
        use: ['pug-loader'],
      },
      {
        test: /\/assets\//i,
        use: {
          loader: 'url-loader',
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
        }
      ],
      filename: 'assets/fonts/fonts.css',
    })
  ],
};

module.exports = (env, argv) => {
  switch (argv.mode) {
    case 'development': {
      config.devServer = { port: 8080 };
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
