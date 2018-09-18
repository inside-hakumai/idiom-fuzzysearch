const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  output: {
    path: __dirname + "/dist/public/javascripts",
    filename: 'bundle.js'
  },
  mode: 'production'
});

