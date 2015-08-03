var NewTodoList = function() {
	this.tasks = [];
  this.counter = 0;
}

NewTodoList.prototype.add = function(item) {
  var task = {
        id: this.counter += 1,
        description: item,
        completed: false
      }
  return this.tasks.push(task)
 }

NewTodoList.prototype.list = function() {
  // for(i = 0; i <= this.tasks.length; i++) {
    this.tasks.forEach( function(task) {
      console.log(task)
    });
  // }
}

// class People
//   def initialize
//     tasks = []
//   end
    // def add(task)
    //   tasks << task
    // end
// end
//     list: function() {
//       for(i = 0; i <= this.tasks.length; i++) {
//         console.log(this.tasks[i])
//       }
//     },
//     // indexOf: function(element) {
//     //   this.tasks.indexOf(element)
//     // },
//     indexOf: function(element) {
//       for(i= 0; i <= this.tasks.length; i++) {
//         if(this.tasks[i].description === element) {
//           return i
//         }
//       }
//     },
//     get: function(index) {
//       this.tasks[index];
//     },
//     remove: function(index) {
//       this.tasks.splice(index, 1);
//     },
//     complete: function(index) {
//       this.tasks[index].completed = true
//     }
//   }

//   return todoList;
// }

// Driver code

todoList = new NewTodoList();

// console.log(todoList.tasks)

todoList.add("kevin")
todoList.add("phil")
todoList.add("phil")
todoList.add("phil")
todoList.add("phil")
todoList.add("phil")

// console.log(todoList.tasks)

todoList.list()

