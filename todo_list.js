var TodoList = function() {
  this.listOfItems = [];
};
ID = 1
var Task = function(item) {
  this.description = item;
  this.completed = false;
  this.id = ID
  ID ++
}

TodoList.prototype.add = function(item){
      this.listOfItems.push(new Task(item));
    };
TodoList.prototype.list = function(){
      return this.listOfItems;
    };
TodoList.prototype.indexOf = function(item){
      // this.listOfItems.indexOf(item)
      var x = 0
      var length = this.list().length
      while(x < length){
        if( this.listOfItems[x].description === item ){
          return x
        }
        x ++
      }
    };
TodoList.prototype.remove = function(index){
      this.listOfItems.splice(index, 1)
    };
TodoList.prototype.get = function(index){
      return this.list()[index];
    },
TodoList.prototype.complete = function(index){
      this.get(index).completed = 'bananas';
    };

var newList = new TodoList();


