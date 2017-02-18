const webpack = require('webpack');

module.exports = {
  entry: {
    'ol-wrapper': [/*'babel-polyfill', */ './index.js']
  },
  output: {
    path: './dist',
    filename: '[name].min.js',
    library: 'olWrapper',
    libraryTarget: 'umd'
  },
  devtool: 'eval-source-map',
  target: 'web',
  bail: true,
  watch: false,
  plugins: [new webpack.NoErrorsPlugin()],
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
