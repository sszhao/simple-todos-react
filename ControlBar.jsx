// Task component - represents a single todo item
ControlBar = React.createClass({
  
  render() {
    return (
      <div>
        <label className="LabelItemsLeft" style={{float:"left"}}>{this.props.numberOfIncompletedItems} items left</label>
        <div className="ButtonGroupTaskScope" style={{float:"left"}}>
          <button className="ButtonAllItems">All</button>
          <button className="ButtonActiveItems">Active</button>
          <button className="ButtonCompletedItems">Completed</button>
        </div>
        <button className="ButtonClearCompleted" style={{float:"left"}}>Clear Completed ({this.props.numberOfCompletedItems})</button>
      </div>
    );
  }
});