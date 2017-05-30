const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
new WebpackDevServer(webpack(config), {
    // contentBase: "./",
    publicPath: config.output.publicPath,
    hot: true,
    stats: {
        colors: true
    },
    noInfo: false,
    historyApiFallback: true
}).listen(2333, '127.0.0.1', function (err, result) {
    if (err) {
        console.log(err);
    }
    console.log('Listening at localhost:2333');
    console.log('Pleae wait');

});