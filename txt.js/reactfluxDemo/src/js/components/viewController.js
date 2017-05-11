//控制器层

var Todo = require("./todo.js");
var atFy = require("../actions/actionFactory.js");
var store = require("../store/appStore.js");

console.log(store);

var ConView = React.createClass({
    getInitialState : function(){
        return {
            itemList : store.getAll()
        }
    },
    updateView : function(){//只要执行该方法,则会从数据模型当中获取最新数据,并更新到视图当中
        var list = store.getAll();
        this.setState({
            itemList : list
        })
    },
    componentDidMount : function(){
        store.addListener(this.updateView);
    },
    addFun : function(text){
        atFy.addAction(text);
    },
    render : function(){
        return (
            <Todo onClick={this.addFun} dataList={this.state.itemList} />
        );
    }
});

module.exports = ConView;