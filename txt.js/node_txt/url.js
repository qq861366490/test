var url = require("url");

//parse 方法对url字符串做解析,第一个参数为url,第二个参数有值时为true 代表对url中的参数进行解析,并包装成对象
var obj = url.parse("//www.baidu.com:8080/zt/index.html?username=abc#/abc",true,true);



// console.log(obj);

var URLObj = {
  protocol: 'http:',//协议名
  slashes: true, //是否有双斜线
  auth: null, //url中身份验证信息
  host: 'www.baidu.com:8080', //主机域名加端口号
  port: '8080', //端口号
  hostname: 'www.baidu.com', //主机域名
  hash: '#/abc',//哈希值
  search: '?username=abc',//参数
  query: 'username=abc',//参数解析内容
  pathname: '/zt/index.html',//路径名,不带参数
  path: '/zt/index.html?username=abc',//带参数的路径名
  href: 'http://www.baidu.com:8080/zt/index.html?username=abc#/abc' }//全部的地址


//url.format 对有对应属性值的对象进行反向解析成正常url字符串
  var textUrl = url.format(URLObj);

//将两段url拼接成一段正常的url
  var txturl = url.resolve("http://www.aa.com/zt/index.html","http://www.baidu.com");

  console.log(txturl);
  

