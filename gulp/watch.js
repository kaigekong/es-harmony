const gulp = require('gulp');

/**
 * 使用 livereload 监测文件变化浏览器自动刷新
 */
const livereload = require('gulp-livereload');

gulp.task('watch', function() {
	livereload.listen({
		start: true
	});

	gulp.watch('./**/*.*', function(file) {
		livereload.changed(file.patch);
	});
});