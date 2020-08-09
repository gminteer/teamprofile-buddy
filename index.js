const webpack = require('webpack');

module.exports = {
  getAnswers: require('./lib/getAnswers'),
  fakeAnswers: require('./test/mockAnswers'),
  compileDev: (templateLocals) => {
    const config = require('./webpack.config')({ templateLocals, NODE_ENV: 'development' }, { mode: 'development' });
    config.mode = 'development';
    return webpack(config);
  },
  compileProd: (templateLocals) => {
    const config = require('./webpack.config')({ templateLocals, NODE_ENV: 'production' }, { mode: 'production' });
    config.mode = 'production';
    return webpack(config);
  },
};