// Include necessary deps
var webpack = require('webpack');
var webpackDevMiddleware = require('koa-webpack-dev-server');

// Load our webpack config
var webpackConfig = require('../../config/webpack.config.dev.js');

module.exports=function(app){
	app.use(webpackDevMiddleware(webpack(webpackConfig), {
	    contentBase: webpackConfig.devServer.contentBase,
	    publicPath: webpackConfig.devServer.publicPath,
	    hot: true,
	    stats: webpackConfig.devServer.stats
	}));
}

