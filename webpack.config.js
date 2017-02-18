var path = require('path');
var webpack = require('webpack');

var baseDir = __dirname;

module.exports = {
    entry: {"main" : path.join(__dirname, '/app/index.js')},
    output: { path: __dirname, filename: 'bundle.js' },

    module: {
        loaders: [
            {
                test: /.(jsx|js)?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },

    devtool: "source-map",

    resolve: {
        extensions: ['', '.jsx', '.js', '.json'],
        root: [path.join(__dirname, '/app/')]
    },

    devServer: {
        inline: true,
        // hot: true,
        port: 3000
    },
};