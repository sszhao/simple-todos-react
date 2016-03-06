// Task component - represents a single todo item
Task = React.createClass({
  getInitialState(){
    return {
      itemCompleted: false
    };
  },
  /*toggleCompleted(){
    this.setState({
      itemCompleted: !this.state.itemCompleted
    });
  },*/
  propTypes: {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    task: React.PropTypes.object.isRequired
  },
  render() {
    let checked = (this.state.itemCompleted === true) ? "checked" : "";
    return (
      <li><input type="checkbox" className="CheckBoxItemCompleted" /> {this.props.task.text}<button className="DeleteButton">X</button></li>
    );
  }
});