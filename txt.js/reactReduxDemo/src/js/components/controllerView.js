import View from "./view.js";
import Store from "../store/store.js";

var ConView = React.createClass({
    getInitialState : function(){
        //通过soter.getState()来获取到store内的数据模型
        return {
            list : Store.getState()
        }
    },
    conClick : function(text){

        var action = {
            type : "ADD_ITEM",
            text : text
        };

        Store.dispatch(action);
    },
    componentDidMount : function(){
        Store.subscribe(this.updateView);
    },
    updateView : function(){
        this.setState({
            list : Store.getState()
        })
    },
    render : function(){
        return (
            <View data={this.state.list} clickFun={this.conClick} />
        )
    }
});

export default ConView;