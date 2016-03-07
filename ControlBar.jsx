// Task component - represents a single todo item
ControlBar = React.createClass({
  
  render() {

    let allText = "All";
    let activeText = "Active";
    let completeText = "Complete";

    if(this.props.selectionScope === 0){
      allText = "<strong>"+allText+"</strong>";

    }
    else if(this.props.selectionScope === 1){
      activeText = "<strong>"+activeText+"</strong>";
    }
    else if(this.props.selectionScope === 2){
      completeText = "<strong>"+completeText+"</strong>";
    }


    //Note that JSX cannot parse HTML tags directly. To include HTML tags in a variable, we need to use dangerouslySetInnerHTML label.
    //Also note that including style information in the HTML in JSX is not a good practice. The better way is to use CSS file to achieve this
    return (
      <div>
        <label className="LabelItemsLeft" style={{float:"left"}}>{this.props.numberOfIncompletedItems} items left </label>
        <div className="ButtonGroupTaskScope" style={{float:"left"}}>
          <button className="ButtonAllItems"  dangerouslySetInnerHTML={{__html: allText}}></button>
          <button className="ButtonActiveItems" dangerouslySetInnerHTML={{__html: activeText}}></button>
          <button className="ButtonCompletedItems" dangerouslySetInnerHTML={{__html: completeText}}></button>
        </div>
        <button className="ButtonClearCompleted" style={{float:"left"}} >Clear Completed ({this.props.numberOfCompletedItems})</button>
      </div>
    );
  }
});