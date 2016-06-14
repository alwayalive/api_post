var React = require("react");
var formState = ["登入","创建并登入"]
module.exports = React.createClass({
	getInitialState(){
		return {
			formState:0,
		}
	},
	handleAClick( e ){
		var target = e.target,
			formState = 0;
		if( this.state.formState === 0 ){
			target.textContent = "我有标识";
			formState = 1;
		}else{
			target.textContent = "没有标识？";
		}
		this.setState({
			formState
		});
	},
	render(){
		return (
			<form action={ this.props.url } method="post">
				<ul>
					<li><input type="text" name="identity" placeholder="请输入标识"/><a href="javascript:void(0)" onClick={ this.handleAClick }>没有标识？</a></li>
					<li><input type="submit" value={ formState[ this.state.formState ] }/></li>
				</ul>
			</form>
		);
	}
});