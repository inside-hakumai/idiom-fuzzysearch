const merge = require('webpack-merge');
const common = require('./webpack.common');

const config = merge(common, {
  mode: 'production'
});

module.exports = config;
