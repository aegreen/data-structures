var Stack = function() {
  var newStack = {};

  newStack.storage = {};

  newStack.count = 0;

  _.extend(newStack, stackMethods);

  return newStack;
};

var stackMethods = {};

stackMethods.size = function() {
	return Object.keys(this.storage).length;
};

stackMethods.push = function(value) {
	this.storage[this.count] = value;
	this.count++;
};

stackMethods.pop = function() {
	var keys = Object.keys(this.storage).sort();
	var removed = this.storage[keys[keys.length - 1]];
	delete this.storage[keys[keys.length - 1]]
	return removed;
};
