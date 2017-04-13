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
  devtool: 'eval-source-map',
  target: 'web',
  bail: true,
  watch: false,
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
