//gh功能是: 将index.html模板中的代码和参数2(字符串)拼接到一起 并向页面输出,最后关闭连接
var gh = require("./getHtml.js");

//获取07073网页数据,并通过回调函数接收数据
var gd = require("./getData.js");

var cheerio = require("cheerio");

var router = {
    goHome : function(res){//应该向页面输出首页
        
        //向客户端输出页面,并且页面包含a标签
        gh(res,"<a href='/list'>游戏列表</a>");
    },
    goList : function(res){//应该向页面输出列表页

        $.ajax({
            url: "...",
            type: "post",
            success : function(data){

            }
        })
        
        //调用getData.js提供的方法,回调函数用来接收获取到的数据
       /* gd(function(dataList){

            //获取到数据之后  调用getHtml()方法对数据进行包装
            var ulHtml = getHtml(dataList);

            //向客户端输出包含ulHtml代码的页面
            gh(res,ulHtml);
        });*/

        gd({
            success : function(data){
                var ulHtml = getHtml(data);

                gh(res,ulHtml);
            }
        })
    }
} 

module.exports = router;

//该方法功能:  对数据进行html代码包裹  最后返回html字符串
function getHtml(list){
    var $ = cheerio.load("<ul></ul>");

    list.map(function(value , index){
        $("ul").append(`<li><a href='${value.href}'>${value.txt}</a></li>`);
    });

    return $.html();
}