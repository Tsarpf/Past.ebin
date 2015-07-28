var webpack = require( 'webpack' );
var ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
var path = require( 'path' );

module.exports = {
	entry: [
		'./js/index.js'
	],
	output: {
		path: path.join( __dirname, 'dist' ),
		publicPath: '/dist/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin(),
		new ExtractTextPlugin( 'app.css' )
	],
	module: {
		preLoaders: [ {
			test: /\.js$/,
			exclude: [ '/node_modules/', 'server/node_modules', path.join( __dirname, 'js/utils/' ) ],
			loader: 'eslint-loader'
		} ],
		loaders: [ {
			test: /\.js$/,
			loaders: [ 'babel' ],
			exclude: /node_modules/
		}, {
			test: /\.css$/,
			loader: ExtractTextPlugin.extract( 'css-loader?module!cssnext-loader' )
		} ]
	},
	resolve: {
		extensions: [ '', '.js', '.json' ],
		root: path.join( __dirname, 'node_modules' )
	}
};
