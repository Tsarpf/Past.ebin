module.exports = function( grunt ) {
	var webpackDistConfig = require( './webpack.dist.config.js' );
	require( 'load-grunt-tasks' )( grunt );
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
				src: [ 'dist' ]
			}
		},
		copy: {
			build: {
				files: [ {
					src: 'index.html',
					dest: 'dist/'
				} ]
			}
		}
	} );

	grunt.registerTask( 'build', [ 'clean', 'copy', 'webpack' ] );
};
