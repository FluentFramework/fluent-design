const gulp = require('gulp');
const stylus = require('gulp-stylus');

gulp.task('to-css', function () {
    return gulp.src('./src/fluent-design.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./lib/css'));
});
gulp.task('watch', function () {
    // watch source
    gulp.watch('./src/**/*.styl', ['to-css'])
});