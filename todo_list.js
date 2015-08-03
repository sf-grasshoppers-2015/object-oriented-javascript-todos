var TodoList = function() {
  var Task = function(item){
      this.id = 0,
      this.description = item,
      this.completed = false
  }

  Task.prototype.complete = function(){
      this.completed = true
  }
  this.tasks = []
    this.add = function(item){
        var newTask = new Task(item);
        this.tasks.push(newTask)
    }

    this.list = function(){
        for(var x in this.tasks){
        console.log(this.tasks[x])}
    }

    this.get = function(indx){
        console.log(this.tasks[indx])
    }

    this.remove = function(item){

        var remove_it = this.tasks.indexOf(item)
        this.tasks.splice(remove_it, 1);

    }
};



// Driver code


var todoList = new TodoList();

todoList.add("Bread")
todoList.add("cheese")
todoList.add("Milk")
// todoList.list()
// console.log(" ")
// todoList.get(1)

var breadTask = todoList.tasks[0]
// breadTask.id
// breadTask.description
// breadTask.completed

// breadTask.complete()
// breadTask.completed
todoList.remove(breadTask)
todoList.list()
