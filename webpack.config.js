var webpack = require('webpack');

module.exports = {
    entry: {
        'build/index': './src/index.js'
    },

    output: {
        filename: '[name].min.js'
    },

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'stage-0', 'react'],
                plugins: ["transform-class-properties"]
            }
        }, {
            test: /\.less$/,
            loader: "style!css!less"
        }, {
            test: /\.css/,
            loader: 'style!css'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url'
        }]
    }
}

