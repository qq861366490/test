var crypto = require("crypto"); //载入crypto模块

var md5 = crypto.createHash("md5"); //生成md5的加密算法对象

md5.update("123abc");//注入需要被加密的字符串

var miText = md5.digest("hex");//获取密文

console.log(miText);