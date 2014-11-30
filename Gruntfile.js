(function () {
   'use strict';
}());
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			options: {
				separator: '\r\n\r\n'
			},
			dist: {
				src: [
					'app/js/app.js', 
					'app/js/animations.js', 
					'app/js/controllers.js', 
					'app/js/directives.js', 
					'app/js/filters.js', 
					'app/js/services.js'
				],
				dest: 'app/js/app.min.js'
			}
		},

		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			dist: {
				files: {
					'app/js/app.min.js': ['<%= concat.dist.dest %>']
				}
			}
		},

		jshint: {
			files: [
				'gruntfile.js', 
				'app/js/app.js', 
				'app/js/animations.js', 
				'app/js/controllers.js', 
				'app/js/directives.js', 
				'app/js/filters.js', 
				'app/js/services.js'
			], 
			options: {
				globals: {
					jQuery: true,
					console: true,
					module: true
				}
			}
		},

		compass: {
			dist: {
				options: {
					sassDir: 'app/assets/scss',
					cssDir: 'app/assets/css',
					environment: 'development',
					outputStyle: 'compressed'
				}
			}
		},

		watch: {
			files: ['<%= jshint.files %>', 'app/assets/scss/**/*.scss'],
			tasks: ['concat', 'uglify', 'jshint', 'compass']
		}

	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['concat', 'uglify', 'jshint', 'compass', 'watch']);
};