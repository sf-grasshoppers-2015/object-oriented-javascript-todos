var newTask = function(task_description) {
  this.description = task_description;
  this.completed = false;
  }

newTask.prototype.complete = function(){
  console.log("This is " + this)
  this.completed = true
}

var TodoList = function() {
  this.tasks = [];
}

TodoList.prototype.add = function(task_description){
  new_task = new newTask(task_description)
  this.tasks.push(new_task)
}

TodoList.prototype.list = function(){
  for (i=0; i < this.tasks.length; i++) {
    console.log(this.tasks[i]);
  }
}

TodoList.prototype.remove = function(task){
  for (i=0; i < this.tasks.length; i++) {
    // console.log(this.tasks[i])
    if (task === this.tasks[i]){
      delete this.tasks[i];
    }
  }
}


// Driver code


// Note we are using a JavaScript constructor now.
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

groceryList.list();
//> Task {id: 1, description: 'bread', completed: true}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// This should remove the task from the todo list
groceryList.remove(breadTask);

groceryList.list();
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


