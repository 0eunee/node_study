var WebSocketServer = require("ws").Server;
var wss = new WebSocketServer({ port: 3000 });

// 연결이 수립되면 클라에 메시지 전송, 클라 메시지 수신
wss.on("connection", function (ws) {
    ws.send("Hello I am a server.");
    ws.on("message", function (message) {
        console.log("Received: %s", message);
    });
});