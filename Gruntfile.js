module.exports = function( grunt ) {
	require( 'load-grunt-tasks' )( grunt );
	var webpackDistConfig = require('./webpack.dist.config.js');
	grunt.initConfig( {
		pkg: grunt.file.readJSON( 'package.json' ),
		webpack: {
			options: webpackDistConfig,
			dist: {
				cache: false
			}
		},
		clean: {
			build: {
				src: ['dist']
			}
		}
	} );

	grunt.registerTask( 'build', ['clean', 'webpack']);
}
