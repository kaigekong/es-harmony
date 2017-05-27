const gulp = require('gulp');

/**
 * 使用 ESlint 校验 js 语法
 */
const eslint = require('gulp-eslint');

gulp.task('lint', function() {
	return gulp.src('./js/**/*.js')
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
});