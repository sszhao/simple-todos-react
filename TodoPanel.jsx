// App component - represents the whole app
TodoPanel = React.createClass({

  render() {
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
 
          <TaskList tasks={this.props.tasks}/>
          <ControlBar numberOfIncompletedItems="0" numberOfCompletedItems="0" />
        </div>
    );
  }
});

