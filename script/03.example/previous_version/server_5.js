var http = require('http');
var url = require('url');

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log('Request for ' + pathname + ' received.');

        // handle은 pathname과 request handler의 관계를 담고 있는 객체
        route(handle, pathname);

        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('Hello World');
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log('Server has started.');
}

exports.start = start; // 모듈화