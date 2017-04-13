const BabiliPlugin = require('babili-webpack-plugin')
const path = require('path')
const webpack = require('webpack');

module.exports = {
  entry: {
    'ol-wrapper': ['./index.js']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].min.js',
    library: 'olWrapper',
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  target: 'web',
  bail: true,
  watch: false,
  externals: {
    ol: 'ol'
  },
  plugins: [
    new BabiliPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              'env',
              {
                targets: {
                  browsers: 'last 2 versions',
                  uglify: true
                }
              }
            ]
          ]
        }
      }
    ]
  }
};
