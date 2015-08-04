var TodoList = function() {
	this.tasks = [];
  this.counter = 0;
}


TodoList.prototype.add = function(item) {
  var task = new Task(item)
  task.id = this.counter += 1
  return this.tasks.push(task)
 }

TodoList.prototype.list = function() {
  this.tasks.forEach( function(task) {
    console.log(task)
  });
}

// ---------------- Task Class ----------------------

var Task = function(item) {
  this.id = 0;
  this.description = item;
  this.completed = false;
}

Task.prototype.complete = function() {
  this.completed = true
}

// Driver code

todoList =  new TodoList();

todoList.add("bread")
todoList.add("phil")
todoList.add("phil")
todoList.add("phil")
todoList.add("phil")
todoList.add("phil")

// console.log(todoList.tasks)

todoList.list()
var breadTask = todoList.tasks[0]
console.log(breadTask.id) //-> 1 (some unique numerical ID)
console.log(breadTask.description) //-> 'bread'
console.log(breadTask.completed) //-> false


// This should complete the task
breadTask.complete();

breadTask.completed //-> true

todoList.list();


