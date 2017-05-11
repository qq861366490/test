var AppDispatcher = require("../dispatcher/dispatcher.js");

module.exports = {
    addAction : function(text){
        var action = {
            type : "ADD_ITEM",
            text : text
        }

        AppDispatcher.dispatch(action);
    }
};
