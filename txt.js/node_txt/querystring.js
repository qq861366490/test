var qs = require("querystring");


//parse 将键值对字符串转换成对象  第二个参数代表  设置键值对之间用"参数类型"来做分隔(例如:"," 就代表键值对之间通过","分隔)  第三个参数代表键和值之间的连接符号(例如:":",键和值之间通过":"连接)
var obj = qs.parse("name:abc,pwd:123",",",":");

// console.log(obj);

var data = {
    name : "zhuiszhu",
    age : 18,
    list : ["node","vue","js","react"]
};

//stringify 将对象解析成url格式的字符串 ,第二个参数和第三个参数功能同上
var txt = qs.stringify(data,"啊"," ");

// console.log(txt);


//将中文转成url格式编码
var urlTxt = qs.escape("你好");

var chineseTxt = qs.unescape(urlTxt);
console.log(chineseTxt);