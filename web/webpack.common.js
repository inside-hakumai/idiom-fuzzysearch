let webpack = require('webpack');
let path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

let config = {
  target: 'web',
  entry:  {
    'root': './src/client-tsx/script.tsx',
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: 'tsconfig.client.json'
            },
          }
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
              importLoaders: 2
            }
          },
          "sass-loader"
        ]
      }
    ]
  },
  resolve: {
    modules: ["node_modules"],
    extensions: ['.js', '.ts', '.tsx', '.jsx'],
    plugins: [new TsconfigPathsPlugin({configFile: "./tsconfig.client.json"})]
  }
};

module.exports = config;
