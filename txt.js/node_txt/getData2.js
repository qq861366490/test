var http = require("http");
var cheerio = require("cheerio");

var data= null;


//处理数据 返回筛选后的结果
function getList(html){
    var $ = cheerio.load(html);

    var aDom = $("ul.list04").find("li").find('.tt').find("a");
    var aList = [];

    aDom.each(function(index , value){
        aList.push({
            txt : $(value).text(),
            href : $(value).attr('href')
        });
    });

    return aList;
}


module.exports = function(obj){
    
    //开始向目标页面发送请求
    http.get("http://www.07073sy.com/",function(response){
        var html = "";

        //接收到数据之后,进行拼接
        response.on("data" , function(data){
            html += data;    
        });

        //接收完成
        response.on("end" , function(){
            //将接收到的原始html代码进行过滤处理,最后得到纯粹的数组数据
            var dataList = getList(html);

            //将处理得到的数据输出给回调函数
            obj.success(dataList);
        });
    });


}
