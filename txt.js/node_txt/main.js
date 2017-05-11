var http = require("http");


var server = http.createServer(function(request , response){
	response.writeHead(200 , {"Content-Type":"text/html ; charset=utf-8"});

	response.end("<h2>hello world!</h2>");
});

server.listen(3000 , function(){
	console.log("server running at http://localhost:3000");
});