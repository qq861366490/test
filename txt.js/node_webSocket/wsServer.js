var http = require("http");
var fs = require("fs");

var htmlCon = fs.readFileSync("./webSocket.html");

//开启页面服务器
http.createServer((req , res) => {
    res.writeHead(200 , {"Content-Type" : "text/html; charset=utf-8"});
    res.end(htmlCon);
}).listen(3000);

var webSocketServer = require("ws").Server;

var wss = new webSocketServer({port:9000});

wss.on("connection" , ws => {
    console.log("有客户端上线了");

    ws.on("message" , message => {
        console.log(`客户端说:${message}`);
        ws.send(`你好,你刚才是不是说${message}?`);
    })

    ws.on("close" , () => {
        //当客户端离开  需要消除内存占用
        global.gc();//调用内存回收垃圾

    })

})