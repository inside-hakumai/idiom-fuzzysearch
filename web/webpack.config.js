let webpack = require('webpack');
let path = require('path');

const MODE = 'development';
const enabledSourceMap = (MODE === 'development');

let config = {
  target: 'web',
  mode: MODE,
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
      },
      {
        test: /\.scss/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: true,
              sourceMap: enabledSourceMap,
              importLoaders: 2
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: enabledSourceMap,
            }
          }
        ]
      },
    ]
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "src/renderer/js"),
    ],
    extensions: ['.js', '.ts', '.tsx', '.jsx']
  },
  devtool: 'source-map',
};

module.exports = config;
