var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var count = 0;

  // Implement the methods below
  someInstance.push = function(value){
    storage[count] = value;
    count++;
  };

  someInstance.pop = function(){
    var keys = Object.keys(storage).sort();
    var removed = storage[keys[keys.length - 1]];
    delete storage[keys[keys.length - 1]];
    return removed;
  };

  someInstance.size = function(){
    return Object.keys(storage).length;
  };

  return someInstance;
};

