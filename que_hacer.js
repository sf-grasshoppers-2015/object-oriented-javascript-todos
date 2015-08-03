
// Todo is a format that I want to use 10000000 times
var Todo = function(){
  this.tasks = []
};

  var Task = function(newTask) {
  this.id = 0,
  this.description = newTask,
  this.completed = false
}

// set of functions that ALL instances of the Todo object will inherit
Task.prototype.complete = function() {
  this.completed = true
}

Todo.prototype.add = function(newTask) {
  var task = new Task(newTask)
  this.tasks.push(task)
  task.id = this.tasks.length
};

// display each task in the instance's array
Todo.prototype.list = function () {
  for (var i in this.tasks) {
    console.log(this.tasks[i])
  }
  return this.id + "and" + this.description
}

// instance of our Todo
var groceryList = new Todo();
groceryList.add("chocolate")
groceryList.add("bread")
groceryList.add("peanut butter")
groceryList.list();

var yourPantry = new Todo();
yourPantry.add("rice")
yourPantry.add("potatos")
yourPantry.list();

var partyStuff = new Todo();

// go get the rice and check it off on the list which is stored as an array
var completeRice = yourPantry.tasks[0]


// console.log("chocolate" === groceryList.tasks[1])




// another way to see what is going on with just addTask and just list
// Todo.prototype = {
//   addTask: function() {},
//   list: function() {},
