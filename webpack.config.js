const HtmlWebpackPlugin = require('html-webpack-plugin');
const GoogleFontsPlugin = require('@beyonk/google-fonts-webpack-plugin');
const config = {
  module: {
    rules: [
      {
        test: /\.pug$/i,
        use: ['pug-loader'],
      },
      {
        test: /\/assets\//i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
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
        },
      ],
      filename: 'assets/fonts/fonts.css',
    }),
  ],
};

module.exports = (env, argv) => {
  const cssRule = {
    test: /\.scss$/i,
    use: ['css-loader', 'postcss-loader', 'sass-loader'],
  };
  let answerFunc;
  switch (argv.mode) {
    case 'development': {
      config.devServer = {port: 8080};
      cssRule.use.unshift('style-loader');
      config.module.rules.push(cssRule);
      answerFunc = require('./test/mockAnswers');
      break;
    }
    case 'production': {
      cssRule.use.unshift({loader: 'file-loader', options: {name: 'assets/css/main.css'}}, 'extract-loader');
      config.module.rules.push(cssRule);
      answerFunc = require('./lib/getAnswers');
      break;
    }
  }
  if (env && env.templateLocals) answerFunc = async () => env.templateLocals;
  config.plugins.push(
    new HtmlWebpackPlugin({
      template: 'src/views/index.pug',
      filename: 'index.html',
      templateParameters: async () => Object({mode: argv.mode, ...(await answerFunc())}),
    })
  );
  return config;
};
