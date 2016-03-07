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
    var completedText = (this.props.task.completed === true) ? "<strike>"+this.props.task.text+"</strike>" : this.props.task.text;
    return (
      <li><input type="checkbox" className="CheckBoxItemCompleted" checked={this.props.task.completed} /><span dangerouslySetInnerHTML={{__html: completedText}}></span><button className="DeleteButton">X</button></li>
    );

  }
});