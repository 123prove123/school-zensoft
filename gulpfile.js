var gulp = require('gulp');
var ts = require('gulp-typescript');
 
gulp.task('default', function () {
    return gulp.src('./index.ts')
	      .pipe(ts({
          noImplicitAny: true,
          out: './index.js'
	      }))
        .pipe(gulp.dest('./distr/'));
});