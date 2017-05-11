var eventEmitter = require("events").EventEmitter;


var event = new eventEmitter();

var listener1 = function(){
    console.log("listener1");
}

var listener2 = function(){
    console.log("listener2");
}

event.on("event1" , listener1);

event.addListener("event1" , listener2);



/*
//event.on 给自定义事件绑定监听器
event.on("abcdef",function(){

    console.log("123");
});

event.on("abcdef", function(){
    console.log("二次绑定");
})

//event.addLinstener 给指定的事件添加监听器
event.addListener("abcdef" , function(){
    console.log("3");
});


//event.once  给自定义事件添加一次性监听器
event.once("aaa",function(data,text,num){
    console.log(data);
})

event.on("abc",function(){

    console.log("abc事件被触发");
});

// setTimeout(function(){

// event.emit("aaa");
    
// },1000);
*/

//删除指定事件的指定监听器
event.removeListener("event1" , listener2);

//删除所有事件的所有监听器 如果有参数 则代表删除指定事件的所有监听器
event.removeAllListeners("event1");

//设置事件监听器数量上限
event.setMaxListeners(100);

//返回指定事件的监听器列表
var list = event.listeners("event1");

//触发事件,参数2及以后的值可用来向监听器传递参数
event.emit("event1");