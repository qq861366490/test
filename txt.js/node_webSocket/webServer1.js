
var http = require("http");
var fs = require("fs");
var webSocket = require("./webSocketServer.js");
//启动websocket服务
webSocket();

var htmlTxt = fs.readFileSync("./webSocketClient.html");

//启动http页面请求服务
http.createServer((req , res) => {
    res.writeHead(200 , {"Content-Type":"text/html; charset=utf-8"});
    res.end(htmlTxt);
}).listen(3000);

