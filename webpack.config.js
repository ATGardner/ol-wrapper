const BabiliPlugin = require('babili-webpack-plugin');
const path = require('path');
const { DefinePlugin } = require('webpack');

module.exports = function(env) {
  const devtool = env.production ? 'source-map' : 'eval-source-map';
  const watch = !env.production;
  const NODE_ENV = JSON.stringify(env.production ? 'production' : 'development');
  const babiliOptions = env.production ? { evaluate: false } : false;
  return {
    entry: {
      'ol-wrapper': './index.js'
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].min.js',
      library: 'olWrapper',
      libraryTarget: 'umd'
    },
    devtool,
    target: 'web',
    bail: true,
    watch,
    externals: {
      ol: 'ol'
    },
    plugins: [
      new DefinePlugin({
        'process.env': { NODE_ENV }
      }),
      new BabiliPlugin(babiliOptions, { comments: false })
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
                  targets: { browsers: 'last 2 versions' }
                }
              ]
            ]
          }
        }
      ]
    }
  };
};
