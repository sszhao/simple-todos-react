// Define a collection to hold our tasks
Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  // This code is executed on the client only
 
  Meteor.startup(function () {
    // Use Meteor.startup to render the component after the page is ready
    ReactDOM.render(<App />, document.getElementById("render-target"));
  });
}

if (Meteor.isServer) {
  // This code is executed on the client only
 
  Meteor.startup(function () {
    // Use Meteor.startup to render the component after the page is ready
    if(Tasks.find({}).count() === 0){
    	Tasks.insert({ text: "Introduce Meteor", createAt: new Date()});
    	Tasks.insert({ text: "Introduce React", createAt: new Date()});
    	Tasks.insert({ text: "Introduce Meteor + React", createAt: new Date()});
    }
  });
}
