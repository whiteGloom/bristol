const gulp = require('gulp');
const gulpStylusPlugin = require('gulp-stylus'); // https://www.npmjs.com/package/gulp-stylus

function stylusTask() {
  return gulp.src('./src/index.styl')
    .pipe(gulpStylusPlugin())
    .pipe(gulp.dest('./dist/'));
}

module.exports = stylusTask;
