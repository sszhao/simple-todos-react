// Task component - represents a single todo item
ControlBar = React.createClass({
  handleScopeChangeAll(){
    this.props.handleScopeChange(0);
  },
  handleScopeChangeActive(){
    this.props.handleScopeChange(1);
  },
  handleScopeChangeComplete(){
    this.props.handleScopeChange(2);
  },
  render() {

    let allText = "All";
    let activeText = "Active";
    let completeText = "Complete";

    if(this.props.selectionScope === 0){
      allText = "<strong>All</strong>";
    }
    else if(this.props.selectionScope === 1){
      activeText = "<strong>Active</strong>";
    }
    else if(this.props.selectionScope === 2){
      completeText = "<strong>Completed</strong>";
    }

    return (
      <div>
        <label className="LabelItemsLeft">{this.props.numberOfIncompletedItems} items left</label>
        <div className="ButtonGroupTaskScope">
          <button className="ButtonAllItems" onClick={this.handleScopeChangeAll}>{allText}</button>
          <button className="ButtonActiveItems" onClick={this.handleScopeChangeActive}>{activeText}</button>
          <button className="ButtonCompletedItems" onClick={this.handleScopeChangeComplete}>{completeText}</button>
        </div>
        <button className="ButtonClearCompleted" onClick={this.props.clearCompleted}>Clear Completed ({this.props.numberOfCompletedItems})</button>
      </div>
    );
  }
});