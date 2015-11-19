var gulp = require('gulp');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var cursors = require('./source/cursors');
var cursorNames = cursors.map(cursor=> cursor.name);

gulp.task('html',function() {
  gulp.src('source/index.jade')
    .pipe(jade({
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
  gulp.watch('source/**/*.jade', ['html']);
  gulp.watch('source/**/*.styl', ['styles']);
});

gulp.task('default',['html','styles']);
