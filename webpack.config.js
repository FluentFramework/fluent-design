const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: {
        index: [
            './src/fluent-design.js'
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'lib')
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.js|jsx$/,
                loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=react,presets[]=stage-0'],
                include: path.join(__dirname, 'js'),
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json', '.scss']
    }
}