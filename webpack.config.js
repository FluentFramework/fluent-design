const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: {
        index: [
            'webpack-dev-server/client?http://localhost:2333',
            'webpack/hot/only-dev-server',
            './src/fluent-design.js'
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'lib'),
        publicPath: '/lib'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            // {
            //     test: /\.js$/,
            //     loader: 'babel-loader'
            // },
            {
                test: /\.js?$/,
                loaders: ['babel-loader'],
                include: path.join(__dirname, 'src')
            }

        ]
    },
    resolve: {
        extensions: ['.js', '.json', '.styl']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
}