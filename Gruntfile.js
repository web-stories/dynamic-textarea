"use strict";

module.exports = function( grunt ) {
	grunt.initConfig({
		qunit: {
			all: {
				options: {
					urls: [ "http://127.0.0.1:9998/test" ]
				}
			}
		},
		connect: {
			"build-qunit": {
				options: {
					port: 9998
				}
			}
		}
	});

	// Loading dependencies
	for ( var key in grunt.file.readJSON( "package.json" ).devDependencies ) {
		if ( key !== "grunt" && key.indexOf( "grunt" ) === 0 ) {
			grunt.loadNpmTasks( key );
		}
	}

	grunt.registerTask( "default", [ "test" ] );
	grunt.registerTask( "test", [ "connect:build-qunit", "qunit" /* TODO */ ] );
};