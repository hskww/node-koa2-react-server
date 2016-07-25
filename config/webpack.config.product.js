// module.exports = {
//   entry: './public/js/main.js',
//   output: {
//     path: './public/js',
//     filename: 'bundle.js'
//   },
//   resolve: {
//     extensions: ['', '.js', '.jsx']
//   },
//   module: {
//     loaders: [{
//       test: /\.jsx?$/,
//       loader: 'babel-loader!jsx-loader?harmony'
//     }]
//   },
//   module: {
//     loaders: [
//       {test: /src(\\|\/).+\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader!jsx-loader?harmony', query: {presets: ['es2015', 'react']}}
//     ]
//   },
// };
var path = require('path');
var webpack = require('webpack');
var node_modules = path.resolve(__dirname, '../node_modules');
var dir_client = path.resolve(__dirname, '../public/js');
var dir_dist = path.resolve(__dirname, '../public/build/js');
module.exports = {
    entry: {
        index:[
            path.resolve(dir_client, 'main.js')
        ],
        detail:[
            path.resolve(dir_client, 'detail.js')
        ]
    },
    output: {
        path: dir_dist, // for standalone building
        filename: '[name].[chunkhash:8].min.js'
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
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings:true
            }
        }),
        new webpack.optimize.MinChunkSizePlugin({
            minChunkSize:1
        }),
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        colors: true // Nice colored output
    }
};