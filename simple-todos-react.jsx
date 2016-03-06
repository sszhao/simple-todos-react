/* 
	Thinking in React for the Todo App 

	Steps: 
	1) Component hierarchy 
	2) Static version
	3) Minimum states
	4) Where the states live
	5) Inverse data flow 


	=== Step 1: Component hierarchy 

	TodoPanel 
		TaskForm [markall as completed, input field]
		TaskList
			Task [checkbox, todoText, deleteButton]
		ControlBar [Number of items, SelectAllButton, SelectActiveButton, SelectCompleteButton, ClearCompletedButton]


	=== Step 2: Static version
	
	Building order 

	Task -> TaskList -> ControlBar -> TaskForm -> TodoPanel 


*/



if (Meteor.isClient) {
  // This code is executed on the client only
 var tasks = [
  {text:"Todo Item 1"},
  {text:"Todo Item 2"},
  {text:"Todo Item 3"}
 ];

 Meteor.startup(function () {
    // Use Meteor.startup to render the component after the page is ready
    ReactDOM.render(<TodoPanel tasks={tasks}/>, document.getElementById("render-target"));
 });
}

if (Meteor.isServer) {
  // This code is executed on the client only
 
  Meteor.startup(function () {
    //doing something
  });
}
