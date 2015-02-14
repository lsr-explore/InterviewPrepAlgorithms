/**
 * Created by laurie on 12/24/2014.
 *
 *
 * Recipes
 * http://www.valdelama.com/useful-gulp-recipes
 */
var gulp = require("gulp");
var jshint = require("gulp-jshint");
var concat = require("gulp-concat");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var mocha = require("gulp-mocha");
var istanbul = require("gulp-istanbul");
var chai = require("chai");
var plato = require('gulp-plato');
var jsdoc = require("gulp-jsdoc");
var del = require("del");

var w3cjs = require('gulp-w3cjs');
var runSequence = require('run-sequence');
var stylish = require('jshint-stylish');
var notify = require('gulp-notify');
var gutil = require("gulp-util");

gulp.task("default", ["w3cjs", "lint", "runTests"]);


gulp.task("checkQuality", ["cleanQuality"], function(callback) {
    "use strict";

	runSequence(
				'docs',
				'testWithIstanbul',
				'runTests',
              	'w3cjs',
				'lint',
				'complexity', // ToDo - why does this need to be at the end (an error is thrown)
              callback);
});

// ToDo - getting errors when running with existing published site
gulp.task("publish", ["cleanPublish"], function(callback) {
    "use strict";

	runSequence(
              	'publishData',
              	'publishLibs',
              	'publishStyles',
              	'publishHTML',
				'publishScripts',
              	'publishImages',
              	callback);
});

gulp.task("publishMinifiedScripts", function() {
    "use strict";

    return gulp.src("source/scripts/*.js") // read all of the files that are in script/lib with a .js extension
        .pipe(concat("quizApp.js" )) // concatenate all of the file contents into a file titled 'all.js'
        .pipe(gulp.dest("publish/QuizApp/scripts")) // write that file to the dist/js directory
        .pipe(rename("quizApp.min.js")) // now rename the file in memory to 'all.min.js'
        .pipe(uglify()) // run uglify (for minification) on 'all.min.js'
        .pipe(gulp.dest("publish/QuizApp/scripts")); // write all.min.js to the dist/js file

});

gulp.task("publishData", function() {
    "use strict";
	return gulp.src([
    	'source/data/**',
	])
	.pipe(gulp.dest('./publish/QuizApp/data'));
});

gulp.task("publishImages", function() {
    "use strict";
	return gulp.src([
    	'source/images/**',
	])
	.pipe(gulp.dest('./publish/QuizApp/images'));
});


gulp.task("publishLibs", function() {
    "use strict";
	return gulp.src([
    	'source/libs/**',
	])
	.pipe(gulp.dest('./publish/QuizApp/libs'));
});

gulp.task("publishStyles", function() {
    "use strict";
	return gulp.src([
    	'source/styles/**',
	])
	.pipe(gulp.dest('./publish/QuizApp/styles'));
});


gulp.task("publishScripts", function() {
    "use strict";
	return gulp.src([
    	'source/scripts/**',
	])
	.pipe(gulp.dest('./publish/QuizApp/scripts'));
});

gulp.task("publishHTML", function() {
    "use strict";
	return gulp.src([
    	'source/*.html',
	])
	.pipe(gulp.dest('./publish/QuizApp'));
});

gulp.task("testWithIstanbul", function (cb) {
    "use strict";
  gulp.src(["source/js/stack.js"])
    .pipe(istanbul()) // Covering files
    .pipe(istanbul.hookRequire()) // Force `require` to return covered files
    .on('finish', function () {
      gulp.src(["tests/testStack.js"])
        .pipe(mocha())
        .pipe(istanbul.writeReports('qualityReport/coverage')) // Creating the reports after tests runned
        .on('end', cb);
    });
});


gulp.task('complexity', function(){
    "use strict";
    return gulp.src('source/scripts/*.js')
        .pipe(plato('qualityReport/complexity', {
            jshint: {
                options: {
                    strict: true
                }
            },
            complexity: {
                trycatch: true
            }
        }));
});

gulp.task("runTests", function () {
    "use strict";
    return gulp.src(["tests/*.js"], { read: false })
        .pipe(mocha({
            reporter: "spec"
        })) ;
});

gulp.task("docs", function() {
    "use strict";
    gulp.src(["./source/scripts/*.js", "./source/data/*.js"])
  .pipe(jsdoc('./qualityReport/documentation-output'))  
});

gulp.task("w3cjs", function() {
    "use strict";
    gulp.src('source/*.html')
        .pipe(w3cjs()); 
});

gulp.task('lint', function() {
	"use strict";

    gulp.src('./source/scripts/*.js')
        .pipe(jshint('./source/scripts/.jshintrc.txt')
	.on('error', gutil.log))
        .pipe(jshint.reporter('jshint-stylish')
	.on('error', gutil.log))
        .pipe(jshint.reporter('fail')
	.on('error', gutil.log))
	.pipe(notify(function(file) {
          return "JSHint passed: " + file.relative;
      	}));	
});

gulp.task("cleanQuality", function() {
    "use strict";
    del([
    	"qualityReport/**",
	]);
    
});

gulp.task("cleanPublish", function() {
    "use strict";

    del([
    	"publish/QuizApp/*/**"
	]);
});



