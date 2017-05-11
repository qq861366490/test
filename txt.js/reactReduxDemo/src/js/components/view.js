var View = React.createClass({
    clickFun : function(){
        this.props.clickFun(this.refs.text.value);
    },
    getDefaultProps : function(){
        return {
            data : []
        }
    },
    render : function(){
        var dataList = this.props.data.map(function(item , key){
            return <li key={key}>{item}</li>
        })

        return (
            <div>
                <input type="text" ref="text" />
                <button onClick={this.clickFun}>添加</button><br/>
                <ul>
                    {dataList}
                </ul>
            </div>
        )
    }
});

export default View;