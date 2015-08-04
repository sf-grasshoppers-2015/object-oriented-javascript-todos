var Task = function(item) {
  this.id = 0;
  this.description = item;
  this.completed = false;
}

Task.prototype.complete = function() {
  console.log("finished this task YOOOO!");
  this.completed = true;
}

var TodoList = function() {
  this.tasks = [];
  this.counter = 0;
};

TodoList.prototype.add = function(item) {
  var newItem = new Task(item);
  newItem.id = this.counter += 1;
  this.tasks.push(newItem);
}

TodoList.prototype.remove = function(taskObj) {
  for (var i = 0; i < this.tasks.length; i++) {
    if (taskObj === this.tasks[i]) {
      console.log("removed this task YOOO!");
      this.tasks.splice(i, 1);
    }
  }
}

TodoList.prototype.list = function() {
  for(var i = 0; i < this.tasks.length; i++) {
    console.log(this.tasks[i]);
  }
}

//var todoList = newTodoList();
var groceryList = new TodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');
// // tasks is now an array of Task objects
groceryList.tasks //-> [Task, Task, Task]
groceryList.list();
// > Task {id: 1, description: 'bread', completed: false}
// > Task {id: 2, description: 'cheese', completed: false}
// > Task {id: 3, description: 'milk', completed: false}
// getting a task object
var breadTask = groceryList.tasks[0];
breadTask.id //-> 1 (some unique numerical ID)
breadTask.description //-> 'bread'
breadTask.completed //-> false
// This should complete the task
breadTask.complete(); // function() { this.completed = true}

breadTask.completed //-> true

groceryList.list();
//> Task {id: 1, description: 'bread', completed: true}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// This should remove the task from the todo list
groceryList.remove(breadTask);

groceryList.list();
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}
