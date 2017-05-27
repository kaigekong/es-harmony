const http = require('http');

const static = require('node-static');

const gulp = require('gulp');

const livereload = require('gulp-livereload');

const eslint = require('gulp-eslint');

gulp.task('watch', function() {
	livereload.listen({
		start: true
	});

	gulp.watch('./**/*.*', function(file) {
		livereload.changed(file.patch);
	});
});

gulp.task('http', function() {
	var file = new static.Server('./', {
		cache: 60,
		gzip: true,
		indexFile: 'index.html'
	});

	http.createServer(function(request, response) {
		request.addListener('end', function() {
			file.serve(request, response, function(err, result) {
				if (err) {
					if (err.status === 404) {
						file.serveFile('/not_found.html', 404, {}, request, response);
					} else if (err.status === 500) {
						file.serveFile('/error.html', 500, {}, request, response);
					}
					console.error(`Error serving ${request.url}  -  ${err.status} - ${err.message}`);
				}
			});
		}).resume();
	}).listen(8080);
	console.log('Server running at http://127.0.0.1:8080/');
});

gulp.task('lint', function() {
	return gulp.src('./js/**/*.js')
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
});

gulp.task('default', ['lint'], function() {
	gulp.run('watch', 'http');
});