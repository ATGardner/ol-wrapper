const webpack = require('webpack'),
    path = require('path');

module.exports = {
    debug: true,
    devtool: 'cheap-module-eval-source-map',
    // noInfo: false,
    entry: {
        'ol-wrapper': ['./index.js', 'babel-polyfill']
    },
    target: 'web',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    devServer: {
        contentBase: './src'
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ],
    externals: {
        'ol': 'ol'
    },
    module: {
        loaders: [
            {test: /\.js$/, include: path.join(__dirname, 'src'), loader: 'babel'}
        ]
    }
};
