const webpack = require('webpack'),
    path = require('path');

module.exports = {
    debug: true,
    noInfo: false,
    entry: {
        'ol-wrapper': ['./index.js', 'babel-polyfill']
    },
    target: 'web',
    output: {
        path: path.join(__dirname, 'dist'),
        library: 'olWrapper',
        libraryTarget: 'umd',
        filename: '[name].min.js'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ],
    externals: {
        'openlayers': 'ol'
    },
    module: {
        loaders: [
            {test: /\.js$/, include: path.join(__dirname, 'src'), loader: 'babel'}
        ]
    }
};
