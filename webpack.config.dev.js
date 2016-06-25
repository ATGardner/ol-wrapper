const webpack = require('webpack'),
    path = require('path');

module.exports = {
    debug: true,
    devtool: 'cheap-module-eval-source-map',
    noInfo: false,
    entry: {
        'ol-wrapper': ['./src/index.js', 'babel-polyfill']
    },
    target: 'web',
    output: {
        path: path.join(__dirname, 'dist'),
        library: 'olWrapper',
        libraryTarget: 'umd',
        filename: '[name].bundle.js'
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {test: /\.js$/, include: path.join(__dirname, 'src'), loader: 'babel'}
        ]
    }
};
