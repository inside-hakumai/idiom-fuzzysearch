const merge = require('webpack-merge');
const common = require('./webpack.common');

const clientConfig = merge(common, {
  mode: 'production'
});

const serverConfig = merge(clientConfig, {
  target: 'node',
  entry: {
    'server-app': './app.ts',
  },
  output: {
    path: __dirname,
    filename: 'app.js'
  }
});

module.exports = [clientConfig, serverConfig];
