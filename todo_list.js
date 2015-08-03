var TodoList = function() {
	this.tasks = [];

  this.add = function(item){
    task = new Task(item)
    task.id = this.tasks.length + 1
    this.tasks.push(task)
  };

  this.list = function(){
    for(i = 0; i < this.tasks.length; i++){
        console.log(this.tasks[i])
    }
  };

  this.remove = function(list_item){
    position = this.tasks.indexOf(list_item)
    this.tasks.splice(position,1)
  };
};

var Task = function(item) {
  this.description = item,
  this.completed = false

  this.complete = function(){
    this.completed = true
  }
}

// Driver code


var todoList = new TodoList();
todoList.add("bread");
todoList.add("cheese");
todoList.add("milk");

var breadTask = todoList.tasks[0];

console.log( breadTask.id) //-> 1 (some unique numerical ID)
console.log(breadTask.description) //-> 'bread'
console.log(breadTask.completed) //-> false

// This should complete the task
breadTask.complete();

console.log( breadTask.completed) //-> true

todoList.list();
//> Task {id: 1, description: 'bread', completed: true}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// This should remove the task from the todo list
todoList.remove(breadTask);

todoList.list();
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}

