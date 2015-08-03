//Write a constructor that creates a new TodoList and new Task using JavaScript constructors and prototypical inheritance.

var TodoList = function() {
  this.tasks = []
};

var Task = function(taskToAdd){
  this.id = 0
  this.description = taskToAdd
  this.completed = false
}

TodoList.prototype.add = function(taskToAdd){
    var task = new Task(taskToAdd)
    this.tasks.push(task)
    task.id = this.tasks.length
  };

TodoList.prototype.list = function(){
  for (var i in this.tasks) {
    console.log(this.tasks[i])
  }
}

TodoList.prototype.remove = function(tasktoRemove){
  for (var i in this.tasks){
    if (this.tasks[i] == tasktoRemove){
      this.tasks.splice(i, 1);
    };
  };
}

Task.prototype.complete = function(){
  this.completed = true;
}

// Driver code


var groceryList = new TodoList;
groceryList.add("cheese");
groceryList.add("bread");
groceryList.add("wine");
groceryList.tasks
groceryList.list();
var breadTask = groceryList.tasks[1]
breadTask.id
breadTask.description
breadTask.complete();
groceryList.list();
groceryList.remove(breadTask);
groceryList.list();
