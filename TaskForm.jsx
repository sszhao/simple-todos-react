
TaskForm = React.createClass({
	getInitialState(){
		return {
			inputText:""
		};
	},
	handleChange(){
		this.setState({
			inputText: this.refs.textInput.value
		});
	},
	handleSubmit(){
		console.log("input Text is " + this.refs.textInput.value);
		this.props.handleTaskSubmit(this.refs.textInput.value);
		//reset it to empty
		this.setState({
			inputText: ""
		});
	},
	render:function(){
		return (
			<form className="new-task" onSubmit={this.handleSubmit}>
              <input
              type="text"
              ref="textInput"
              placeholder="Type to add new tasks"
              value={this.state.inputText}
              onChange={this.handleChange} 
              />
          	</form>
		);

	}
});