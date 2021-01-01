const gulp = require('gulp');
const webpackStreamPlugin = require('webpack-stream'); // https://www.npmjs.com/package/webpack-stream

const webpackOptions = {
  mode: 'development',
  output: {
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js/
      }
    ]
  }
};

function webpackTask() {
  return gulp.src('./src/index.js')
    .pipe(webpackStreamPlugin(webpackOptions))
    .pipe(gulp.dest('./dist/'));
}

module.exports = webpackTask;
