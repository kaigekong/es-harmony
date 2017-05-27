const http = require('http');

/**
 * 使用 node-static 作为静态服务器
 */
const static = require('node-static');

const gulp = require('gulp');

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