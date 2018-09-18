const merge = require('webpack-merge');
const common = require('./webpack.common');

const config = merge(common, {
  output: {
    path: __dirname + "/src/public/javascripts",
    filename: 'bundle.js'
  },
  mode: 'development',
  devtool: 'source-map'
});

module.exports = config;
