var TodoList = function() {
      this.id = 1
      this.tasks = [],
      this.add = function(description) {
        this.tasks.push(new Task(description, this.id))
        this.id +=1
      },
      this.list = function() {
        for(var i=0 ; i<this.tasks.length ; i++) {
          console.log(this.tasks[i])
        }
      },
      this.remove = function(task) {
        for(var i=0; i<this.tasks.length ; i++) {
          if(task == this.tasks[i]) {
            this.tasks.splice(i, 1)
          }
        }
      }
};

var Task = function(description, id) {

      this.id = id,
      this.description = description,
      this.completed = false,
      this.complete = function() {
          this.completed = true
      }
}



// Driver code

var groceryList = new TodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');

// tasks is now an array of Task objects
console.log(groceryList.tasks) //-> [Task, Task, Task]

// groceryList.list();
//> Task {id: 1, description: 'bread', completed: false}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


 // getting a task object
var breadTask = groceryList.tasks[0];

console.log(breadTask)

console.log(breadTask.id) //-> 1 (some unique numerical ID)
console.log(breadTask.description) //-> 'bread'
console.log(breadTask.completed) //-> false


// This should complete the task
breadTask.complete();

breadTask.completed //-> true

groceryList.list();
//> Task {id: 1, description: 'bread', completed: true}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// This should remove the task from the todo list
groceryList.remove(breadTask);

groceryList.add(breadTask);

groceryList.list();
// > Task {id: 2, description: 'cheese', completed: false}
// > Task {id: 3, description: 'milk', completed: false}

