var http = require("http");//引入http模块
var sayHello = require("./sayHello.js").sayHello;

http.createServer(function(req , res){
	res.writeHead(200 , {"Content-Type" : "text/html ; charset=utf-8"});//设置应答头

	if(req.url !== "/favicon.ico"){//判断当请求不是图标的时候,才进行响应

		res.write("你好,这是我的第二个node程序");//向客户端输出正文
		sayHello(res);
		console.log("服务运行");
		res.end();//结束请求
	}


}).listen(3000, "127.0.0.1" ,function(){//监听3000端口  第二个参数为字符串的时候  代表主机名   最后一个funciton(){} 服务开启后的回调函数
 	console.log("server running at http://localhost:3000");
});


// commonjs