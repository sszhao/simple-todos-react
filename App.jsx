// App component - represents the whole app
App = React.createClass({
   // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],
 
  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    return {
      tasks: Tasks.find({}, {sort: {createAt: -1}}).fetch()
    }
  },

  handleSubmit:function(value){
    var myText = value.trim();
    if(myText !== ""){
      Tasks.insert({text:myText, createAt: new Date()});
    }
  },

  renderTasks() {
    return this.data.tasks.map((task) => {
      return <Task key={task._id} task={task} />;
    });
  },
 
  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
          <TaskForm handleSubmit={this.handleSubmit} />
        </header>
 
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
});