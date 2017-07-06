var app = require('express')();
var server = require('http').createServer(app);
// http server를 socket.io server로 upgrade
var io = require('socket.io')(server);

// localhost:3000으로 서버에 접속하면 클라이언트로 index.html 전송
app.get('/', function (req, res) {
   res.sendFile(__dirname + '/index.html');
});

// connection event handler
// connection이 수립되면 event handler function의 인자로 socket이 들어옴
io.on('connection', function (socket) {
    // 접속한 클라이언트의 정보가 수신되면
    socket.on('login', function (data) {
        console.log('Client logged-in:\n name: ' + data.name + '\n userid: ' + data.userid);

        // socket에 클라이언트 정보 저장
        socket.name = data.name;
        socket.userid = data.userid;

        // 접속된 모든 클라이언트에게 메시지 전송
        io.emit('login', data.name);
    });

    // 클라이언트로부터 메시지 수신되면
    socket.on('chat', function (data) {
        console.log('Message from %s: %s', socket.name, data.msg);

        var msg = {
            from: {
                name: socket.name,
                userid: socket.userid
            },
            msg: data.msg
        };

        // 메시지 전송한 클라이언트 제외한 모든 클라이언트에게 메시지 전송
        socket.broadcast.emit('chat', msg);

        // 메시지 전송한 클라이언트에게만 메시지 전송
        // socket.emit('s2c chat', msg);

        // 접속된 모든 클라이언트에게 메시지 전송
        // io.emit('s2c chat', msg);

        // 특정 클라이언트에게만 메시지 전송
        // io.to(id).emit('s2c chat', data);
    });

    // force client disconnect from server
    socket.on('forceDisconnect', function () {
        socket.disconnect();
    });

    socket.on('disconnect', function () {
        console.log('user disconnected: ' + socket.name);
    });
});

server.listen(3000, function () {
    console.log('Socket IO server listening on port 3000');
});