
TaskForm = React.createClass({

	
	render:function(){
		return (
			<form className="new-task" >
              <input
              type="text"
              ref="textInput"
              placeholder="Type to add new tasks"
              value="" 
              />
          	</form>
		);

	}
});