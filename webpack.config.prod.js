const webpack = require('webpack');

module.exports = {
  entry: {
    'ol-wrapper': ['./index.js']
  },
  output: {
    path: './dist',
    filename: '[name].min.js',
    library: 'olWrapper',
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  target: 'web',
  bail: true,
  watch: false,
  externals: {
    openlayers: 'ol'
  },
  plugins: [new webpack.optimize.UglifyJsPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['latest']
        }
      }
    ]
  }
};
