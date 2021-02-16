const gulp = require('gulp');

const webpackTask = require('./gulp/webpack');
const stylusTask = require('./gulp/stylus');
const eslintTask = require('./gulp/eslint');
const cleanTask = require('./gulp/clean');

exports.default = gulp.series(
  cleanTask,
  gulp.parallel(
    gulp.series(
      eslintTask,
      webpackTask
    ),
    stylusTask
  )
);
