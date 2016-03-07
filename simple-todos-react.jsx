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


	=== Step 3: Determine minimum number of states 

	Determine possible states by exam the different data each piece of 
	component may have 

	Possible Data for each Component
		TaskForm 
			allCompleted : {true, false} [State? Yes]
			inputText : String [State? Yes]
		TaskList
			tasks : {Collection} [State? Yes]
		Task 
			completed : {true, false} [State? No, this can be derived from Tasks] Note that I made a mistake to think of it as state in the first draft. 
			visible : {true, false} [State? No, can be derived from	Tasks & SelectionScope]
			todoText : String [State? No, can be derived from Tasks] 
		ControlBar 
			number of items Left: number + string [State? No, can be derived from TaskList]
			selectionScope: {all, active, completed} [State? Yes]
			number of completed items: number [State? No, can be calculated from TaskList]
			status of clearCompleteButton {true, false} [State? No, can be computed from number of completed items]
	
	Based on the above analysis, the minimum number of states are
		allCompleted
		inputText
		tasks 
		selectionScope 
		//itemCompleted (not a state, but I accidentally thought it was a state in the first draft)


	=== Step 4 Determine where each state should live

	allCompleted affects the UI of (inputForm, TaskList, Status of ClearCompleteButton)
		-> should live in TodoPanel 

	inputText affects the UI of (TaskForm) 
		-> Live in TaskForm 

	tasks affects the UI of (TaskList, Task, ControlBar)
		-> should live in TodoPanel 

	SelectionScope affects the UI of (ControlBar, TaskList)
		-> Should live in TodoPanel

	//ItemCompleted affects the UI of Task)
	//	-> should live in	Task

	Therefore, the data structure is the following 

	TodoPanel
		allCompleted: boolean (default: false)
		tasks: List (Meteor.collection)
			For each item {text:"", completed: false, createdAt: new Date()}
		selectionScope: {0, 1, 2} (default 0)

	TaskForm
		inputText: (default "")

	//Task
	//	itemCompleted: boolean (default: false)

	Note that the only state provided by Meteor is tasks. Everything else is provide by React


*/

//Create a collection for tasks 
Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
 // This code is executed on the client only

 //Subscribe to the server's task collection 
 Meteor.subscribe("tasks"); 

 Meteor.startup(function () {
    // Use Meteor.startup to render the component after the page is ready
    // Tasks now come from server, it's no longer a prop passed to the panel
    // We try to access to it directly in the TodoPanel class
    ReactDOM.render(<TodoPanel />, document.getElementById("render-target"));
 });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    //add an initial list of tasks there if this is empty
    if(Tasks.find().count() === 0) {
    	Tasks.insert({text: "Example Todo Item 1", completed: false, createdAt: new Date()});
		Tasks.insert({text: "Example Todo Item 1", completed: false, createdAt: new Date()});  
		Tasks.insert({text: "Example Todo Item 1", completed: false, createdAt: new Date()});
	}

	//publish the tasks by the sorted order of newer tasks appears on the top
	Meteor.publish("tasks", function () {
  		return Tasks.find({}, {sort: {createdAt: -1}});
  	});
  });
}
