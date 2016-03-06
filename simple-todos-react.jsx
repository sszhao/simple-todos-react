/* 
	Thinking in React for the Todo App 

	1) Component hierarchy 
	2) Static version
	3) Minimum states
	4) Where the states live
	5) Inverse data flow 


	Component hierarchy 

	TodoPanel 
		Title
		TodoInputForm [markall as completed, input field]
		TodoList
			TodoItem [checkbox, todoText, deleteButton]
		ControlBar [Number of items, SelectAllButton, SelectActiveButton, SelectCompleteButton, ClearCompletedButton]

	Building order 

	TodoItem -> TodoList -> ControlBar -> TodoInputForm -> TodoPanel 

	Data 
		TodoInputForm 
			allCompleted : {true, false} [State? Yes]
			inputText : String [State? Yes]
		TodoList
			TodoItems : {List} [State? Yes]
		TodoItem 
			Completed : {true, false} [State? Yes]
			Visible : {true, false} [State? No, can be derived from TodoItems & SelectionScope]
			todoText : String [State? No, can be derived from TodoItems] 
		ControlBar 
			Number of items Left: number + string [State? No, can be derived from TodoList]
			SelectionScope: {all, active, completed} [State? Yes]
			Number of completed items: number [State? No, can be calculated from TodoList]
			Status of ClearCompleteButton {true, false} [State? No, can be computed from number of completed items]

	Minimum States
		allCompleted
		inputText
		TodoItems 
		ItemCompleted 
		SelectionScope 

	allCompleted affects the UI of (inputForm, TodoList, Status of ClearCompleteButton)
		-> should live in TodoListPanel 

	inputText affects the UI of (TodoInputForm) 
		-> Live in TodoInputForm 

	TodoItems affects the UI of (TodoList, TodoItem, ControlBar)
		-> should live in TodoListPanel 

	ItemCompleted affects the UI of (TodoItem)
		-> should live in TodoItem

	SelectionScope affects the UI of (ControlBar, TodoList)
		-> Should live in TodoListPanel

	//Where to store the data
	TodoListPane
		allCompleted: boolean (default: false)
		TodoItems: List (Meteor.collection)
		SelectionScope: {0, 1, 2} (default 0)

	TodoInputForm
		inputText: (default "")

	TodoItem
		itemCompleted: boolean (default: false)

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
