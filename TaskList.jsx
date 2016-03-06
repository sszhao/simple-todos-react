// TaskList component - represents a list of tasks 
TaskList = React.createClass({
  
  render() {
    //console.log("tasks is " + this.props.tasks.toString());

    let taskList = this.props.tasks.map((task) => {
      //console.log("task is " + task.toString());
      return <Task key={task._id} task={task} handleTaskCompleted={this.props.handleTaskCompleted} handleTaskDelete={this.props.handleTaskDelete} />;
    });

    return(
        <ul>
          {taskList}
        </ul>
      );
    
  }
});