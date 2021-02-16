const gulp = require('gulp');
const gulpCleanPlugin = require('gulp-clean'); // https://www.npmjs.com/package/gulp-clean

function cleanTask() {
  return gulp.src('./dist', { read: false })
    .pipe(gulpCleanPlugin())
}

module.exports = cleanTask;
