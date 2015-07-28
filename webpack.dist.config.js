var webpack = require( 'webpack' );
var ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
var path = require( 'path' );

var devFlagPlugin = new webpack.DefinePlugin( {
	__DEV__: JSON.stringify( JSON.parse( process.env.DEBUG || 'false' ) )
} );

module.exports = {
	entry: [
		'./js/index.js'
	],
	output: {
		path: path.join( __dirname, 'dist/assets' ),
		publicPath: '/static/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin(),
		devFlagPlugin,
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
