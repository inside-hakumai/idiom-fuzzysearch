let webpack = require('webpack');
let path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

let config = {
  target: 'web',
  entry:  {
    'root': './src/client-tsx/script.tsx',
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
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: 'tsconfig.client.json'
            },
          }
        ],
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
