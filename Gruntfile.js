module.exports = function( grunt ) {
	"use strict";

	grunt.initConfig({
		qunit: {
			all: {
				options: {
					urls: [ "http://127.0.0.1:9998/test/amd.html" ]
				}
			}
		},
		jshint: {
			options: {
				jshintrc: true
			},
			grunt: "Gruntfile.js",
			source: "src/**/*.js",
			tests: [ "test/**/*.js" ]
		},
		connect: {
			"build-qunit": {
				options: {
					port: 9998
				}
			},
			tests: {
				options: {
					port: 10000,
					open: "http://127.0.0.1:10000/test/",
					keepalive: true
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
	grunt.registerTask( "test", [ "jshint", "connect:build-qunit", "qunit" ] );
};