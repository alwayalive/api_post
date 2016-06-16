var React = require("react");
var formContent = [
		{
			value:"登入",
			text : "没有标识？",
			url : ""
		},{
			value:"创建并登入",
			text : "我有标识",
			url : ""
		}
	];

module.exports = React.createClass({
	getInitialState(){
		return {
			formState : 0,
		}
	},
	handleAClick( e ){
		var target = e.target,
			formState = 0;
		if( this.state.formState === 0 )
			formState = 1;

		target.textContent = formContent[ formState ].value;
		this.setState({
			formState
		});
        this.refs.msg.textContent="";
	},
    componentDidMount(){
        this.refs.msg.textContent = document.getElementById("msg").value;
    },
	render(){
		var content = formContent[ this.state.formState ];
		return (
			<form action={ this.props.url } method="post">
				<input type="hidden" name="formState" value={this.state.formState}/>
				<ul>
					<li><input type="text" name="identity" placeholder="请输入标识"/><a href="javascript:void(0)" onClick={ this.handleAClick }>{ content.text }</a></li>
					<li><input type="submit" value={ content.value }/><span ref="msg"></span></li>
				</ul>
			</form>
		);
	}
});