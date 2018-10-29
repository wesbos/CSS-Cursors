var gulp = require('gulp');
var pug = require('gulp-pug');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var cursors = require('./source/cursors');
var cursorNames = cursors.map(cursor=> cursor.name);

console.log("cursors", cursors);
gulp.task('html',function() {
  gulp.src('source/index.pug')
    .pipe(pug({
      locals : {
        cursors : cursors // pass jade the cursors
      }
    }))
    .pipe(gulp.dest('.')) // put it here as index.html
});


gulp.task('styles',function() {
  gulp.src('source/style.styl')
    .pipe(stylus({
      define : {
        cursors : cursorNames
      }
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('.'))
});

gulp.task('watch',['default'],function() {
  gulp.watch('source/**/*.pug', ['html']);
  gulp.watch('source/**/*.styl', ['styles']);
});

gulp.task('default',['html','styles']);
