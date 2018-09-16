const merge = require('webpack-merge');
const common = require('./webpack.common');

const config = merge(common, {
  mode: 'development',
  devtool: 'source-map'
});

module.exports = config;
