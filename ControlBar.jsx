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

    /*if(this.props.selectionScope === 0){
      allText = "<strong>"+allText+"</strong>";
    }
    else if(this.props.selectionScope === 1){
      activeText = "<strong>"+activeText+"</strong>";
    }
    else if(this.props.selectionScope === 2){
      completeText = "<strong>"+completeText+"</strong>";
    }*/


    //Note that JSX cannot parse HTML tags directly. To include HTML tags in a variable, we need to use dangerouslySetInnerHTML label.
    //Also note that including style information in the HTML in JSX is not a good practice. The better way is to use CSS file to achieve this
    return (
      <div>
        <label className="LabelItemsLeft" style={{float:"left"}}>{this.props.numberOfIncompletedItems} items left </label>
        <div className="ButtonGroupTaskScope" style={{float:"left"}}>
          {
           //This is how you can include comments in your JSX code
           //<button className="ButtonAllItems" onClick={this.handleScopeChangeAll} dangerouslySetInnerHTML={{__html: allText}}></button>
           //<button className="ButtonActiveItems" onClick={this.handleScopeChangeActive} dangerouslySetInnerHTML={{__html: activeText}}></button>
           //<button className="ButtonCompletedItems" onClick={this.handleScopeChangeComplete} dangerouslySetInnerHTML={{__html: completeText}}></button>
          }
          <button className="ButtonAllItems" onClick={this.handleScopeChangeAll}>
            {this.props.selectionScope === 0 ? <strong>{allText}</strong>: allText}
          </button>
          <button className="ButtonActiveItems" onClick={this.handleScopeChangeActive}>
            {this.props.selectionScope === 1 ? <strong>{activeText}</strong>: activeText}
          </button>
          <button className="ButtonCompletedItems" onClick={this.handleScopeChangeComplete}>
            {this.props.selectionScope === 2 ? <strong>{completeText}</strong>: completeText}
          </button>
        </div>
        <button className="ButtonClearCompleted" style={{float:"left"}} onClick={this.props.clearCompleted}>Clear Completed ({this.props.numberOfCompletedItems})</button>
      </div>
    );
  }
});