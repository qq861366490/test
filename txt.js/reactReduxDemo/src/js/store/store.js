import {createStore} from "redux";


// AppDispatcher.register(function(action){
//     switch(action.type){
//         case "ADD_ITEM":
//             //业务逻辑处理
//             sotre.setData(action.text);

//             //通知视图更新
//             sotre.emitChange();
            
//             break;
//     }
// });

var reducer = function(state = [] , action = {}){

    switch(action.type){
        case "ADD_ITEM":
            //将新的数据获取到,并和原来的数据模型进行组合,最后返回出去
            return [...state , action.text]
            break;
        default : return state;
    }
}

var store = createStore(reducer);

export default store;

