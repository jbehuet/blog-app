'use strict';

module.exports = {
    entry: {
        javascript: './public/js/app.js'
    },
    output: {
        filename: './public/js/app.min.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader']
        }]
    }
}
