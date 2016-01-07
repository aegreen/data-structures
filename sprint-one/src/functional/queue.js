var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var count = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function(){
    var keys = Object.keys(storage).sort();
    var removed = storage[keys[0]];
    delete storage[keys[0]];
    return removed;
  };

  someInstance.size = function(){
    return Object.keys(storage).length;
  };

  return someInstance;
};
