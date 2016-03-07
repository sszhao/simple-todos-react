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
    return{
        tasks: Tasks.find({}, {sort:{createdAt: -1}}).fetch()
      } 
  },

  render() {

    let incompleteNumber =0;
    let completeNumber = 0;

    let completedTasks = [];
    let incompletedTasks = [];

    this.data.tasks.map((task) => {
      
      if(task.completed === true){
        completeNumber++;
        completedTasks.push(task);
      }
      else if(task.completed === false){
        incompleteNumber++;
        incompletedTasks.push(task);
      }
    });


    var myTasks = this.data.tasks;

    if(this.state.selectionScope === 1){
      myTasks = incompletedTasks;
    }
    else if(this.state.selectionScope === 2){
      myTasks = completedTasks;
    }

    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
          <TaskForm />
          <div className="checkboxAllCompleted">
            <input type="checkbox" name="checkBoxAllCompleted" checked={this.allCompleted} />
            <label>Mark all as completed </label>
          </div>
        </header>
           <TaskList tasks={myTasks} />
           <ControlBar selectionScope={this.state.selectionScope} numberOfIncompletedItems={incompleteNumber} numberOfCompletedItems={completeNumber} />
        </div>
    );
  }
});

