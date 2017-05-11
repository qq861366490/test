var http = require("http");
var qs = require("querystring");



var dataObj = {
    "question[title]":"node提交表单",
    "question[content]":"<p>node模拟表单post提交</p>",
    "question[courseId]":"227",
    "question[lessonId]":"1753",
    "_csrf_token":"cb09c4b8b773f988064844443f664a4c007fa0b3"
}

var strData = qs.stringify(dataObj);

var option = {
    hostname : "www.codingke.com",
    port : 80,
    method : "POST",
    path : "/ajax/create/course/question",
    headers : {
        "Accept":"*/*",
        "Accept-Encoding":"gzip, deflate",
        "Accept-Language":"zh-CN,zh;q=0.8",
        "Connection":"keep-alive",
        "Content-Length":strData.length,
        "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",
        "Cookie":"PHPSESSID=fsgpk01a55815r90fqfhsba462; UM_distinctid=15aef74a7f8284-0816726529d637-6b1d157d-fa000-15aef74a7f91d0; Hm_lvt_9f92046de4640f3c08cf26535ffdd93c=1490076084; Hm_lpvt_9f92046de4640f3c08cf26535ffdd93c=1490076978; CNZZDATA1256018185=1649059852-1490070968-null%7C1490076407",
        "Host":"www.codingke.com",
        "Origin":"http://www.codingke.com",
        "Referer":"http://www.codingke.com/v/398-chapter-227-course",
        "User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36",
        "X-CSRF-Token":"cb09c4b8b773f988064844443f664a4c007fa0b3",
        "X-Requested-With":"XMLHttpRequest"
    }
}

    var txt = "";
    
var request = http.request(option , function(response){
    response.setEncoding("utf-8");


    response.on("data" , function(data){
        txt += data;
    });

    response.on("end" , function(){
        console.log(txt);
    })
});


request.write(strData);

request.end();

