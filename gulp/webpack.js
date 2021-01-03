const gulp = require('gulp');
const webpack = require('webpack');

const webpackStreamPlugin = require('webpack-stream'); // https://www.npmjs.com/package/webpack-stream

const webpackOptions = {
  mode: 'development',
  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        loader: 'ts-loader',
        test: /\.(tsx?|js)$/
      }
    ]
  }
};

function webpackTask() {
  return gulp.src('./src/index.ts')
    .pipe(webpackStreamPlugin(webpackOptions, webpack))
    .pipe(gulp.dest('./dist/'));
}

module.exports = webpackTask;
