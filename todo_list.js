var TodoList = function() {
  this.tasks = []
};

var Task = function() {
  this.id = 0,
  this.description = "",
  this.completed = false
};

TodoList.prototype.add = function(item){
  var new_item = new Task();
  new_item.description = item;
  new_item.id = this.tasks.length + 1;
  this.tasks.push(new_item);
}

TodoList.prototype.list = function(){
  for (var i = 0; i <= this.tasks.length; i++){
    console.log(this.tasks[i]);
  }
}

Task.prototype.complete = function (){
  this.completed = true;
}

TodoList.prototype.remove = function(task){
  for (var i = 0; i <= this.tasks.length; i++){
    if (this.tasks[i] === task)
      var index = i;
  }
  this.tasks.slice(index);
}


// Driver code

var groceryList = new TodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');

// tasks is now an array of Task objects
groceryList.tasks //-> [Task, Task, Task]

groceryList.list();
//> Task {id: 1, description: 'bread', completed: false}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// getting a task object
var breadTask = groceryList.tasks[0];

breadTask.id //-> 1 (some unique numerical ID)
breadTask.description //-> 'bread'
breadTask.completed //-> false


// This should complete the task
breadTask.complete();

breadTask.completed //-> true

console.log(groceryList.list());
//> Task {id: 1, description: 'bread', completed: true}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}

console.log()

// This should remove the task from the todo list
groceryList.remove(breadTask);

groceryList.list();
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}
