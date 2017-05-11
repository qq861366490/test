var async = require("async");


console.time("test");

//串行无关联

// series(array , function)  该函数有两个参数   参数arry 为函数数组  参数function为一个匿名函数
// arry当中的函数需要接收一个参数    为回调函数   改回调函数执行时需要接收两个参数  一个为错误信息  一个为执行结果
//function 函数需要接收两个参数  第一个为err 错误信息  第二个为执行结果
// 当series执行时  会首先依次执行array 当中的函数  并执行形参接收到的callback函数, 需要将运行结果输出到callback函数的第二个参数中
//当数组函数依次执行完毕之后,会将返回的结果集合到数组当中   并在function 的data参数当中被接收到   

 
// async.series([
//     function (callback){

//         setTimeout(function(){
//             callback(null, "one");
//         },1000);
//     },
//     function (callback){
//         setTimeout(function(){
//             callback(null, "two");
//         },2000);
//     }
// ] , function(err , data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//         console.timeEnd('test');
//     }
// });

// 并行无关联
// parallel(array , function)  该函数有两个参数   参数arry 为函数数组  参数function为一个匿名函数
// arry当中的函数需要接收一个参数    为回调函数   改回调函数执行时需要接收两个参数  一个为错误信息  一个为执行结果
//function 函数需要接收两个参数  第一个为err 错误信息  第二个为执行结果
// 当series执行时  会同时执行array 当中的函数  并执行形参接收到的callback函数, 需要将运行结果输出到callback函数的第二个参数中
//当数组函数全部执行完毕之后,会将返回的结果集合到数组当中   并在function 的data参数当中被接收到  
// async.parallel([
//     function(callback){
//         setTimeout(function(){
//             callback(null , "one");
//         },1000);
//     },
//     function(callback){
//         setTimeout(function(){
//             callback(null , "two");
//         },4000);
//     }
// ],function(err , data){
//     console.log(data);
//     console.timeEnd("test");
// });


// 串行有关联
// waterfall(array , function)  该函数有两个参数   参数arry 为函数数组  参数function为一个匿名函数
// arry当中的函数需要接收一个参数    为回调函数   改回调函数执行时需要接收两个以上的参数  一个为错误信息  一个为执行结果并传到下一个函数的第一个形参(第二个形参,第三个形参...)
//function 函数需要接收两个以上的参数  第一个为err 错误信息  第二个为array数组中最后一个函数执行的callback传递过来的参数 当然也可以接收三个四个等等无上限数量的参数

async.waterfall([
    function (callback){
        
        callback(null , "第一个函数的参数1" ,"第一个函数的参数2");
    },
    function (one , two,callback){

        callback(null , one , two , "第二个函数的参数" );
    },
    function (one , two , three , callback){

        callback(null , [one , two , three , "null"]);
    }
],function(err , data ){
    console.log(data);
});