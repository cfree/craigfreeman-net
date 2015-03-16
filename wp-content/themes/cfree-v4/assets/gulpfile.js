/**
 * Define extensions
 */
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	compass = require('gulp-compass'),
	filesCached = require('gulp-cache'),
	filesChanged = require('gulp-changed'),
	jsHint = require('gulp-jshint'),
	livereload = require('gulp-livereload'),
	compressImgs = require('gulp-imagemin'),
	notify = require('gulp-notify'),
	map = require('map-stream'),
	bower = require('gulp-bower'),
	watching = false,
	files = {
		all: {
			scss: 'scss/**/*.scss',
			css: 'css/*.css',
			js: {
				custom: 'js/**/*.js',
				vendor: 'vendor/**/*.min.js'
			},
			img: 'img/**/*'
		},
		prod: {
			css: 'css/styles.min.css',
			js: 'js/scripts.min.css'
		}
	},
	paths = {
		scss: 'scss/',
		css: 'css/',
		js: 'js/',
		img: 'img/',
		bower: './vendor/'
	};


/**
 * Development tasks
 */

// Compile Sass via Compass and refresh styles in browser
gulp.task('compileSass', function() {
	return gulp.src(files.all.scss)
		.pipe(
			compass({
				css: paths.css,
				sass: paths.scss,
				image: paths.img,
				comments: false,
				require: ['susy', 'normalize-scss']
			})
			.on('error', notify.onError({
				message: 'Sass failed. Check console for errors'
			}))
		)
		.pipe(gulp.dest(paths.css))
		.pipe(livereload())
		.pipe(notify('Compass successfully compiled'));
});

// Error checking scripts
gulp.task('lintScripts', function() {
	return gulp.src(files.all.js.custom)
		.pipe(jsHint())
		.pipe(jsHint.reporter('default'))
		.on('error', notify.onError(function(file) {
			if (!file.jshint.success) {
				return 'JSHint failed. Check console for errors';
			}
		}));
});

// Install Bower components
gulp.task('runBower', function() {
	return bower(paths.bower)
		.pipe(gulp.dest(paths.bower));
});

// Set watch mode
gulp.task('setWatchStatus', function() {
	watching = true;
});


/**
 * Build tasks
 */

// Process style files
gulp.task('readyStyles', function() {
	// Minify
	// Concatenate
});

// Process script files
gulp.task('readyScripts', function() {
	// Minify
	// Concatenate
});

// Compress images
gulp.task('compressImgs', function() {
	gulp.src(files.all.img)
		.pipe(
			filesCached(
				compressImgs({
					optimizationLevel: 7,
					progressive: true,
					interlaced: true
				})
			)
		)
		.pipe(gulp.dest(paths.img));
});


/**
 * Run tasks
 */
gulp.task('watch', ['setWatchStatus'], function() {
	gulp.watch(files.all.scss, ['compileSass']);
	gulp.watch(files.all.js.custom, ['lintScripts']);
	livereload.listen();
});

gulp.task('build', ['compressImgs', 'readyStyles', 'readyScripts']);

gulp.task('install', ['runBower']);

// Default task
gulp.task('default', ['compileSass', 'lintScripts']);
