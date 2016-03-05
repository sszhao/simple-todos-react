
TaskForm = React.createClass({

	getInitialState:function(){
		return({
			text:""
		});
	},
	handleTextChange:function(){
		
		this.setState({
			text: this.refs.textInput.value
		});
	},
	handleSubmit:function(){
		this.props.handleSubmit(this.state.text);
		this.setState({ 
			text: ""
		});
	},
	render:function(){
		return (
			<form className="new-task" onSubmit={this.handleSubmit} >
              <input
              type="text"
              ref="textInput"
              placeholder="Type to add new tasks"
              value={this.state.text} 
              onChange={this.handleTextChange}
              />
          	</form>
		);

	}
});