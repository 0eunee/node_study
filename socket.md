# socket
클라이언트가 socket.io 서버에 접속했을 때 connection 이벤트가 발생 :
```node
// connection event handler
// connection이 수립되면 event handler function의 인자로 socket이 들어온다
io.on('connection', function(socket) {

});
```
클라이언트가 전송한 메시지 수신 :
```node
socket.on('event_name', function(data) {
  console.log('Message from Client: ' + data);
});
```
클라이언트에게 메시지 송신 :
```node
// 접속된 모든 클라이언트에게 메시지를 전송한다
io.emit('event_name', msg);

// 메시지를 전송한 클라이언트에게만 메시지를 전송한다
socket.emit('event_name', msg);

// 메시지를 전송한 클라이언트를 제외한 모든 클라이언트에게 메시지를 전송한다
socket.broadcast.emit('event_name', msg);

// 특정 클라이언트에게만 메시지를 전송한다
io.to(id).emit('event_name', data);
```
socket.io 서버에 접속 :
```node
// socket.io 서버에 접속한다
var socket = io();
```
서버로 메시지 송신 :
```node
socket.emit("event_name", msg);
```
서버로부터 메시지 수신 :
```node
socket.on("event_name", function(data) {
  console.log('Message from Server: ' + data);
});
```
namespace(default : /) :
```node
// Server-side
var nsp = io.of('/my-namespace');

nsp.on('connection', function(socket){
  console.log('someone connected'):
});
nsp.emit('hi', 'everyone!');

// Client-side
// 지정 namespace로 접속한다
var socket = io('/my-namespace');
```
