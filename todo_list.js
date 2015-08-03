

var Task = function (description) {
  this.id = 0;
  this.description = description;
  this.completed = false;
  this.complete = function() {
    this.completed = true;
  }
}

var newTodoList = function () {
  this.tasks = [];
  this.add = function(task) {
   this.tasks.push(new Task(task));
   len = this.tasks.length
   this.tasks[len-1].id = len;
  }
  this.list = function() {
    for (var i = 0; i < this.tasks.length; i++) {
      console.log("Task { id: " + this.tasks[i].id.toString() + ", description: " + "\""
        +this.tasks[i].description.toString() +", completed: " + this.tasks[i].completed.toString() + "}")
    }
  }
  this.remove = function(taskObj) {
    id = taskObj.id
    this.tasks.splice(id - 1, 1)
  }
}





// Driver code


var groceryList = new newTodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');
console.log(groceryList.tasks);
groceryList.list();

var breadTask = groceryList.tasks[0];
console.log(breadTask)
breadTask.id //-> 1 (some unique numerical ID)
breadTask.description //-> 'bread'
breadTask.completed //-> false

// // This should complete the task
breadTask.complete();


console.log(breadTask.completed) //-> true

// groceryList.list();
// //> Task {id: 1, description: 'bread', completed: true}
// //> Task {id: 2, description: 'cheese', completed: false}
// //> Task {id: 3, description: 'milk', completed: false}


// // This should remove the task from the todo list
groceryList.remove(breadTask);

groceryList.list();
// //> Task {id: 2, description: 'cheese', completed: false}
// //> Task {id: 3, description: 'milk', completed: false}

