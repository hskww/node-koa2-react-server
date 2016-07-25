
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var node_modules = path.resolve(__dirname, '../node_modules');
var dir_client = path.resolve(__dirname, '../public/js');
var dir_dist = path.resolve(__dirname, '../public/build/js');
module.exports = {
    entry: {
        index:[
            'webpack/hot/only-dev-server',
            'webpack-dev-server/client?http://localhost:9000',
            path.resolve(dir_client, 'main.js')
        ],
        detail:[
            'webpack/hot/only-dev-server',
            'webpack-dev-server/client?http://localhost:9000',
            path.resolve(dir_client, 'detail.js')
        ]
        
    },
    output: {
        path: dir_dist, // for standalone building
        publicPath: dir_dist, // for hot building
        filename: '[name].js'
    },
    devServer: {
        contentBase: dir_client,
        filename: "[name].js",
        publicPath:"/js/",
        hot:true,
        inline: true,
        progress: true,
        port:9000,
        stats: { colors: true }
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)/,
            exclude: /node_modules/,
            loader: [ 'babel-loader'],
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    plugins: [
        
        new webpack.HotModuleReplacementPlugin(),
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin(),
       
    ],
    stats: {
        colors: true // Nice colored output
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map'
};