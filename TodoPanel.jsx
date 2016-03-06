// App component - represents the whole app
TodoPanel = React.createClass({
  
  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  //Based on our analysis, 
  //a number of additional states live in this component
  //need to set them up
  getInitialState() {
    return {
      allCompleted: false,
      selectionScope: 0 //0 = all, 1 = active, 2 = completed 
    };
  },
  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {

    if(this.state.selectionScope === 1){ //scope is completed is false
      return {
        tasks: Tasks.find({completed:false}).fetch()
      } 
    }
    else if(this.state.selectionScope === 2) //scople is completed is true
    {
      return {
        tasks: Tasks.find({completed:true}).fetch()
      }
    }
    else { //scope is all
     return {
        tasks: Tasks.find({}).fetch()
      } 
    }
  },

  render() {

    let incompleteNumber =0;
    let completeNumber = 0;

    this.data.tasks.map((task) => {
      //console.log("task is " + task.toString());
      if(task.completed === true){
        completeNumber++;
      }
      else if(task.completed === false){
        incompleteNumber++;
      }
    });

    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
          <TaskForm />
          <div className="checkboxAllCompleted">
            <input type="checkbox" name="checkBoxAllCompleted" />
            <label>Mark all as completed </label>
          </div>
        </header>
           <TaskList tasks={this.data.tasks}/>
          <ControlBar numberOfIncompletedItems={incompleteNumber} numberOfCompletedItems={completeNumber} />
        </div>
    );
  }
});

