
function task(item, id) {
  this.id = id,
  this.description = item,
  this.completed = false,
  this.complete = function(){
    this.completed = true;
  }
}


var newTodoList = function() {
	taskList: function taskList(){
    this.tasks = [],
    this.add = function(item) {
      this.tasks.push(new task(item, this.tasks.length+1))
    },
    this.list = function(){ return this.tasks }
    // this.remove = function(task){delete this.tasks[task.id]}
    this.remove = function(task){this.tasks.splice(task.id-1,1)}
  }

  return taskList
};




// Driver code


var todoList = newTodoList();

// Note we are using a JavaScript constructor now.
var groceryList = new todoList();
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
