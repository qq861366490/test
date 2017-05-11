var EventEmitter = require("events").EventEmitter;
var assign = require("object-assign");

var StoreOrigin = {
    item : [],
    setItem : function(text){
        this.item.push(text);
    },
    getAll : function(){
        return this.item;
    },
    emitChange : function(){
        this.emit("addItem");
    },
    addListener : function(callback){
        this.on("addItem" ,callback);
    }
};

var Store = assign({} ,EventEmitter.prototype, StoreOrigin );


module.exports = Store;