let webpack = require('webpack');
let path = require('path');

let config = {
  target: 'web',
  entry:  {
    'root': './src/tsx/script.tsx',
  },
  output: {
    path: __dirname + "/public/javascripts",
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              allowTsInNodeModules: true
            }
          }
        ],
      }
    ]
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "src/renderer/js"),
    ],
    extensions: ['.js', '.ts', '.tsx', '.jsx']
  }
};

module.exports = config;
