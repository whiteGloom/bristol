const gulp = require('gulp');

const webpackTask = require('./gulp/webpack');
const stylusTask = require('./gulp/stylus');
const eslintTask = require('./gulp/eslint');

exports.default = gulp.parallel(gulp.series(eslintTask, webpackTask), stylusTask);
