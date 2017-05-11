var fs = require("fs");


//fs,mkdir(string,function)  用于创建目录   参数string 代表目录名   function 为回调函数 函数接收参数err  当创建失败的时候,err参数用来存储错误信息
// fs.mkdir("logs" , function(err){
//     if(err){
//         console.log("创建失败,原因是:"+err);
//     }else{
//         console.log("目录创建成功");
//     }
// });


//fs.writeFile(filename,fileContent,callback)  用户创建文件   参数filename为字符串类型,代表文件名  fileContent为字符串类型,用于填充文件内容  callback方法执行完成的回调函数  当创建失败的时候,err参数用来存储错误信息 
// 注意事项: filename 可以拼接目录 但前提是目录已经存在,否则文件创建失败 并不会自动创建目录
// fs.writeFile("logs/hello.txt","你好,这是我新建的文件",function(err){
//     if(err){
//         console.log(`文件创建失败,原因是:${err}`);
//     }else{
//         console.log("创建成功");
//     }
// });

//fs.appendFile(filename,appendContent,callback)  filename需要被添加内容的文件路径  appendContent需要添加的文本内容  callback同上
// fs.appendFile("logs/hello.txt","\n这是追加的内容", err => {
//     if(err){
//         console.log(`追加失败,原因是:${err}`);
//     }else{
//         console.log("添加成功");
//     }
// });



//fs.unlink(filename,callback) filename 需要被删除的文件路径   callback回调函数  同上
// fs.unlink("logs/hello.txt",err => {
//     if(err){
//         console.log(`删除失败,原因是:${err}`);
//     }else{
//         console.log("删除成功");
//     }
// });


//fs.readFile(filename,txtCode,callback)  filename为被读取的文件路径   txtcode 文件的字符编码集  callback 回调函数,接收两个参数  参数1 为err 存放读取失败的相关信息   参数2 data 为读取成功时的文件内容
// fs.readFile("hello.txt","utf-8",(err , data) => {
//     if(err){
//          console.log(`读取失败,原因是:${err}`);
//     }else{
//         console.log(data);
//     }
// });

//fs.rmdir(dirname,callback) 删除目录   dirname 为目录路径   callback回调函数  参数err 同上上
// fs.rmdir("logs",err => {
//     if(err){
//         console.log(`目录删除失败,原因是${err}`);
//     }else{
//         console.log("目录删除成功");
//     }
// });


// fs.readdirSync(dirName) 获取目录中的所有文件,并返回由文件名组成的数组  参数dirname为目录名
var list = fs.readdirSync("logs");


// console.log(list);

// list.map(files => {
//     fs.unlink(`logs/${files}`,err => {
//         if(err){
//             console.log(`目录删除失败,原因是${err}`);
//         }else{
//             console.log('删除成功');
//         }
//     })
// });

list.map(function(files){
    fs.unlink(`logs/${files}`,funciton(err){
        if(err){
            console.log(`目录删除失败,原因是${err}`);
        }else{
            console.log('删除成功');
        }
    })
});

