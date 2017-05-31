const gulp = require('gulp');

/**
 * 使用 ESlint 校验 js 语法
 */
const eslint = require('gulp-eslint');

const babel = require('gulp-babel');

gulp.task('lint', function() {
	return gulp.src('./js/**/*.js')
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
});

/**
 * 使用 gulp-babel
 * 转换
 */
gulp.task('babel', function() {
	return gulp.src('./js/**/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('./dist'));
});