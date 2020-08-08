const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },
};

module.exports = (env, argv) => {
  switch (argv.mode) {
    case 'development': {
      config.devServer = {port: 8080};
      config.plugins = [
        new HtmlWebpackPlugin({
          template: 'src/views/index.pug',
          templateParameters: async () => await require('./test/mockAnswers')(),
          filename: 'index.html',
        }),
      ];
      break;
    }
    case 'production': {
      config.plugins = [
        new HtmlWebpackPlugin({
          template: 'src/views/index.pug',
          templateParameters: async () => await require('./lib/getAnswers')(),
          filename: 'index.html',
        }),
      ];
    }
  }
  return config;
};
