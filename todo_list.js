NewTodoList = function() {
  this.tasks = []
};

NewTodoList.prototype.add = function(item) {
  this.tasks.push(item);
}

NewTodoList.prototype.list = function() {
  NewObject = function(id, description) {
    var printTasks = {
      id: id,
      description: description,
      completed: false,
    }
  }
}


// Driver code


var todoList = new NewTodoList();

todoList.add('banana');
todoList.add('cheese');
console.log(todoList.tasks)
todoList.list();


// this creates another copy of newTodoList
// gives us access to the tasks array outside the object literal
// var cookies = new NewTodoList();
// cookies.add('chocolate', 30);

// console.log(cookies.tasks)

