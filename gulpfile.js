const gulp = require('gulp'); // https://gulpjs.com/
const webpackStream = require('webpack-stream'); // https://www.npmjs.com/package/webpack-stream

function webpack() {
  return gulp.src('src/index.js')
    .pipe(webpackStream({
      mode: 'production',
      output: {
        filename: "test.js"
      },
      module: {
        rules: [
          {
            loader: 'babel-loader',
            test: '/\.js/'
          }
        ]
      }
    }))
    .pipe(gulp.dest('dist/'));
}

exports.build = webpack;