// Task component - represents a single todo item
Task = React.createClass({
  propTypes: {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    task: React.PropTypes.object.isRequired
  },
  render() {
    return (
      <li><button className="CheckBoxItemCompleted"> </button>{this.props.task.text}<button className="DeleteButton">X</button></li>
    );
  }
});