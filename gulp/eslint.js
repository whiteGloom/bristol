const gulp = require('gulp');

/*
 * Fork "gulp-eslint7"(1) is used instead "gulp-eslint"(2) due to issue(3)
 * 1. https://github.com/adametry/gulp-eslint
 * 2. https://github.com/fasttime/gulp-eslint7
 * 3. https://github.com/adametry/gulp-eslint/issues/250
 */
const gulpEslintPlugin = require('gulp-eslint7');

function eslintTask() {
  return gulp.src(['./src/**/*.js'])
    .pipe(gulpEslintPlugin())
    .pipe(gulpEslintPlugin.format())
    .pipe(gulpEslintPlugin.failAfterError());
}

module.exports = eslintTask;
