var Dispatcher = require("flux").Dispatcher;
var AppDispatcher = new Dispatcher();
var Store = require("../store/appStore.js");

//注册接收action方法
AppDispatcher.register(function(action){
    switch(action.type){
        case "ADD_ITEM": //通过action的type得知需要做什么,本例为添加数据
            //将数据添加到store
            Store.setItem(action.text);

            //通知store更新视图
            Store.emitChange();
            break;
    }
});

module.exports = AppDispatcher;