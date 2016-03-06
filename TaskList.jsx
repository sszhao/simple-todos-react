// TaskList component - represents a list of tasks 
TaskList = React.createClass({
  propTypes: {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    tasks: React.PropTypes.object.isRequired
  },
  render() {
    
    let taskList = this.props.tasks.map((task) => {
      return <Task key={task._id} task={task} />;
    });

    return(
        <ul>
          {taskList}
        </ul>
      );
    
  }
});