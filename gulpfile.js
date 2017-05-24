const gulp = require('gulp');
const stylus = require('gulp-stylus');

gulp.task('to-css', function () {
    return gulp.src('./stylus/fluent-design.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./build/css'));
});
gulp.task('watch', function () {
    // watch source
    gulp.watch('./stylus/**/*.styl', ['to-css'])
});