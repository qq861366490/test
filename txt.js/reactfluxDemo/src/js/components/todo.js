var Todo = React.createClass({
    btnClick : function(){
        var text = this.refs.list.value;

        this.props.onClick(text);
    },
    render : function(){
        var domList = this.props.dataList.map(function(value , i){
            return <li key={i}>{value}</li>
        });

        return (
            <div>
                <input type="text" ref="list" />
                <button onClick={this.btnClick}>添加</button>
                <ul>
                    {domList}
                </ul>
            </div>
        );
    }
})

module.exports = Todo;