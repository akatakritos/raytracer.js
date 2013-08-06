module.exports = function(grunt){
	grunt.initConfig({

		concat: {
			options: {
				separator: ';'
			},
			raytracer: {
				src: [
					'src/intro.js',
					'src/outro.js'
				],
				dest: 'dist/raytracer.js'
			}
		},

		uglify: {
			options: {
				banner: '//paint.js\n'
			},
			dist: {
				files: {
					'dist/raytracer.min.js': ['<%= concat.raytracer.dest %>'],
				}
			}
		},

		jshint: {
			files: ['gruntfile.js', 'src/**/*.js'],
			options: {
				// options here to override JSHint defaults
				globals: {
					console: true,
					module: true,
					document: true
				},
				ignores: ['src/intro.js', 'src/outro.js']
			}
		},
		watch: {
			files: ['<%= jshint.files %>', 'test/*.js'],
			tasks: ['jshint', 'concat']
			}
		});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
	grunt.registerTask('test', ['jshint', 'concat']);
};