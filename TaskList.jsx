// TaskList component - represents a list of tasks 
TaskList = React.createClass({
  
  render() {
    //console.log("tasks is " + this.props.tasks.toString());

    let taskList = this.props.tasks.map((task) => {
      //console.log("task is " + task.toString());
      return <Task key={task._id} task={task} />;
    });

    return(
        <ul>
          {taskList}
        </ul>
      );
    
  }
});