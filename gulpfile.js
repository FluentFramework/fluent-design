<<<<<<< HEAD
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
=======
const fs = require('fs');
const gulp = require('gulp');
const header = require('gulp-header');
const stylus = require('gulp-stylus');
const rename = require('gulp-rename');
const uglifycss = require('gulp-uglifycss');
const runSequence = require('run-sequence');
const pkg = require('./package.json');

const opts = {
    // Task options
    destPath: './lib/css',

    minRename: {
        suffix: '.min'
    },

    banner: [
        '/*!',
        ' * <%= name %> - <%= homepage %>',
        ' * Version - <%= version %>',
        ' * Licensed under the MIT license - http://opensource.org/licenses/MIT',
        ' *',
        ' * Copyright (c) <%= new Date().getFullYear() %> <%= organization %>',
        ' */\n\n'
    ].join('\n')
};

gulp.task('default', function () {
    runSequence('to-css', 'add-header');
});

gulp.task('to-css', function () {
    return gulp.src('./src/fluent-design.styl')
        .pipe(stylus())
        .pipe(gulp.dest(opts.destPath))
        .pipe(rename(opts.minRename))
        .pipe(uglifycss())
        .pipe(gulp.dest(opts.destPath));
});

gulp.task('watch', function () {
    // watch source
    gulp.watch('./src/**/*.styl', ['to-css'])
});

gulp.task('add-header', function () {
    return gulp.src(`${opts.destPath}/*.css`)
        .pipe(header(opts.banner, pkg))
        .pipe(gulp.dest(opts.destPath));
});
>>>>>>> dev
