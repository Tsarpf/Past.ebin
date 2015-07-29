var webpack = require( 'webpack' );
var ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
var path = require( 'path' );

var devFlagPlugin = new webpack.DefinePlugin( {
	__DEV__: JSON.stringify( JSON.parse( process.env.DEBUG || 'false' ) )
} );

module.exports = {
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:3500',
		'webpack/hot/only-dev-server',
		'./js/index.js'
	],
	output: {
		path: path.join( __dirname, '/static/' ),
		publicPath: '/assets/',
		filename: 'bundle.js',
		hot: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		devFlagPlugin,
		new ExtractTextPlugin( 'app.css' )
	],
	module: {
		loaders: [ {
			test: /\.js$/,
			loaders: [ 'react-hot', 'babel' ],
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
