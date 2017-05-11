var ws = require("ws").Server;

//创建socket对象
var socket = new ws({port:9000});

var clientMap = {};

var webSocket = () => {

    socket.on("connection" , client => {
        //获取ip
        var ip = client.upgradeReq.headers.host;


        clientMap[ip] = client;

        client.on('message' , message => {
            //获取传输数据并格式化成对象
            var dataObj = JSON.parse(message);

        });
        //更新用户列表
        upUserList();


        //监听用户下线事件
        client.on("close" , () => {
            //当用户下线,则更新用户列表
            upUserList();
        })

        client.on("error" , err => {
            // console.log()
        })
    });
}

//向所有用户广播信息
var clientEmit = (text) => {
    for(var ip in clientMap){
        clientMap[ip].send(text);
    }
}
//更新用户列表
var upUserList = () => {
    var userList = [];
    for(var ip in clientMap){
        userList.push(ip);
    }

    userList = JSON.stringify(userList);

    clientEmit(userList);
}

module.exports = webSocket;
