var https = require("https");

var option = {//配置请求信息对象
    hostname : "api.douban.com",
    port : 443,
    method : "GET",
    path : "/v2/movie/top250"
}

//向指定的地址发送get请求,通过回调函数的response来接收响应
var request = https.request(option , function(response) {
    var txt = "";

    response.on('data' , function(data){//接收数据
        txt += data;
    });

    response.on("end", function(){//响应结束后开始处理返回的数据


        var subjects = JSON.parse(txt).subjects;//对返回的数据进行格式化 转换成对象
        
        // console.log(subjects);

        //对数据进行迭代
        subjects.map(function(value , index){
            console.log(value.year);
        });

    });
});

request.end();//结束请求