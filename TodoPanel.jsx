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
        tasks: Tasks.find({}).fetch()
      } 
  },
  toggleTaskCompleted(taskID, isCompleted){
      console.log("task completed " + taskID);
      Tasks.update({_id:taskID}, {$set: {completed:isCompleted}});
  },
  handleTaskSubmit(text){
    let trimText = text.trim();
    if(trimText !== ""){
      Tasks.insert({text:trimText, completed:false, createdAt: new Date()});
    }
  },
  handleTaskDelete(taskID){
    Tasks.remove({_id:taskID});
  },
  handleAllChecked(){
    if(this.state.allCompleted === false){
      this.data.tasks.map((task) => {
        Tasks.update({_id:task._id}, {$set: {completed:true}})
      });
      this.setState({
        allCompleted:true
      });
    }else{
      this.setState({
        allCompleted:false
      });
    }
  },
  handleScopeChange(value){
    this.setState({
        selectionScope:value
      });
  },
  clearCompleted(){
    this.data.tasks.map((task) => {
      //console.log("task is " + task.toString());
      if(task.completed === true){
        Tasks.remove({_id:task._id});
      }
    });
  },
  render() {

    let incompleteNumber =0;
    let completeNumber = 0;

    var completedTasks = [];
    var incompletedTasks = [];

    this.data.tasks.map((task) => {
      //console.log("task is " + task.toString());
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
          <TaskForm handleTaskSubmit={this.handleTaskSubmit}/>
          <div className="checkboxAllCompleted">
            <input type="checkbox" name="checkBoxAllCompleted" checked={this.allCompleted} onClick={this.handleAllChecked}/>
            <label>Mark all as completed </label>
          </div>
        </header>
           <TaskList tasks={myTasks} handleTaskCompleted={this.toggleTaskCompleted} handleTaskDelete={this.handleTaskDelete}/>
           <ControlBar selectionScope={this.state.selectionScope} handleScopeChange={this.handleScopeChange} clearCompleted={this.clearCompleted} numberOfIncompletedItems={incompleteNumber} numberOfCompletedItems={completeNumber} />
        </div>
    );
  }
});

