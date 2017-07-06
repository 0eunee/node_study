var http = require('http');

function onRequest(request, response) {
    console.log('Request received');
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World');
    response.end();
}

http.createServer(onRequest).listen(8888);

console.log('Server has started.');

// 한번의 브라우저 요청에 Request received가 두번 찍히는 이유는 대부분의 브라우저가 ~/favicon.ico를 로드하려 하기 때문

