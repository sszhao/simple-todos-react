// Task component - represents a single todo item
Task = React.createClass({
  toggleCompleted(){
    //ask the parent to handle this event 
    this.props.handleTaskCompleted(this.props.task._id, !this.props.task.completed);
    console.log("the key is " + this.props.task._id + " " + !this.props.task.completed);
  },
  handleTaskDelete(){
    this.props.handleTaskDelete(this.props.task._id);
  },
  propTypes: {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    task: React.PropTypes.object.isRequired
  },
  render() {
    //var completedText = (this.props.task.completed === true) ? "<strike>"+this.props.task.text+"</strike>" : this.props.task.text;
    return (
      //<li><input type="checkbox" className="CheckBoxItemCompleted" checked={this.props.task.completed} onChange={this.toggleCompleted} /><span dangerouslySetInnerHTML={{__html: completedText}}></span><button className="DeleteButton" onClick={this.handleTaskDelete}>X</button></li>
      <li>
        <input type="checkbox" className="CheckBoxItemCompleted" checked={this.props.task.completed} onChange={this.toggleCompleted} />
        <strong>{this.props.task.username}</strong>: 
        { this.props.task.completed === true ? <strike>{this.props.task.text}</strike> :this.props.task.text }
        <button className="DeleteButton" onClick={this.handleTaskDelete}>X</button>
      </li>
    );
  }
});