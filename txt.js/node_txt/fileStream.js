var fs = require("fs");

var fileStream = fs.createReadStream("./logs/text.txt");

var fileWrite = fs.createWriteStream("./logs/abc.txt");

// var txt = "";
// fileStream.on("data" , function(data){
//     txt += data;
// });

fileStream.pipe(fileWrite);

// fileStream.on("end" , function(){
//     console.log(txt);

//     fileWrite()
// })