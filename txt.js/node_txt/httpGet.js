var https = require("https");
var url = "https://www.lagou.com";
var cheerio = require("cheerio");

function getList(html){
    var nav = [];

    var $ = cheerio.load(html);

    var navBox = $(".menu_main");

    navBox.each((index , navItem) => {
        var navList = $(navItem);//大的导航模块

        var title = navList.find("h2").text();

        var childNav = [];//二级菜单列表

        var aList = navList.find("a");
        
        navList.find("a").each((index , value) => {
            childNav.push($(value).text());
            // console.log($(value).text());
        });

        nav.push({
            title : title,
            childList : childNav
        });
    });

    return nav;
}

function printTitle(list){
    list.map((value , index) => {
        console.log(value.title);
    })
}

https.get(url , response => {
    var html= "";

    response.on("data" , data => {
       html += data; 
    });

    response.on("end" , () => {
        // console.log(html);

        var navList = getList(html);

        // console.log(navList);
        printTitle(navList);
    })

    response.on("error" , err => {
        console.log(err);
    });

} );