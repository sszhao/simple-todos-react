// Task component - represents a single todo item
ControlBar = React.createClass({
  
  render() {

    //Note that I am adding styles to the JSX directly, which is not 
    //a recommended practice. The better practice is to include it in CSS
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