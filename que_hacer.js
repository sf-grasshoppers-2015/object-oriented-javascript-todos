
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

// outside the Todo object literal to avoid making a copy EACH time
// you have a new task

Todo.prototype.remove = function(deleteMe) {
  for (var i=0; i<=this.tasks.length; i++) {
    console.log(this.tasks[i])
    console.log(deleteMe)
    if (deleteMe === this.tasks[i]){
      console.log("I just deleted: ");
      this.tasks.splice(i,1);
    }
  }
}

// display each task in the instance's array
Todo.prototype.list = function () {
  for (var i in this.tasks) {
    console.log(this.tasks[i]);
  }
}

// instance of our Todo
var groceryList = new Todo();
groceryList.add("chocolate")
groceryList.add("bread")
groceryList.add("peanut butter")
groceryList.list();

// expect to remove chocolate from the array
// groceryList.remove("chocolate")
// groceryList.remove("bread")
// groceryList.list();


var yourPantry = new Todo();
yourPantry.add("rice")
yourPantry.add("potatos")
yourPantry.list();


// go get the rice and check it off on the list which is stored as an array
//gets the 'rice' from the tasks array
var completeRice = yourPantry.tasks[0];
//expect to see the ID associated with rice
// completeRice.id
// completeRice.description
completeRice.complete();
console.log(completeRice)

// delete rice from the list
yourPantry.remove(completeRice)

// should return FALSE in console and it does!
// console.log("chocolate" !== groceryList.tasks[1])

var partyStuff = new Todo();



// another way to see what is going on with just addTask and just list
// Todo.prototype = {
//   addTask: function() {},
//   list: function() {},
