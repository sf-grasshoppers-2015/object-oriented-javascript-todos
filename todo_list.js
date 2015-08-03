var newTodoList = function() {
  this.tasks = []
};

var Task = function(description) {
  this.description = description;
  this.completed = false;
};

newTodoList.prototype.add = function(item) {
  this.tasks.push(new Task(item));
};

newTodoList.prototype.list = function() {
  for(var i=0;i<=this.tasks.length;i++) {
    console.log(this.tasks[i])
  };
};

Task.prototype.complete = function() {
  this.completed = true;
};

newTodoList.prototype.remove = function(obj) {
  this.tasks.splice(obj, 1)
};




// Driver code


var todoList = new newTodoList();
// Note we are using a JavaScript constructor now.
todoList.add('bread');
todoList.add('cheese');
todoList.add('milk');

// tasks is now an array of Task objects
todoList.tasks //-> [Task, Task, Task]

todoList.list();
//> Task {id: 1, description: 'bread', completed: false}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// getting a task object
var breadTask = todoList.tasks[0];

breadTask.id //-> 1 (some unique numerical ID)
breadTask.description //-> 'bread'
breadTask.completed //-> false


// This should complete the task
breadTask.complete();

breadTask.completed //-> true

todoList.list();
//> Task {id: 1, description: 'bread', completed: true}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// This should remove the task from the todo list
todoList.remove(breadTask);

todoList.list();
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}
