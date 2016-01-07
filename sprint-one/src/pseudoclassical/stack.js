var Stack = function() {
  this.storage = {};
  this.count = 0;
};

//Stack.prototype = Object.create(Stack);
//Stack.prototype.constructor = Stack.prototype;

Stack.prototype.size = function() {
	return Object.keys(this.storage).length;
};

Stack.prototype.push = function(value) {
	this.storage[this.count] = value;
	this.count++;
};

Stack.prototype.pop = function() {
	var keys = Object.keys(this.storage).sort();
	var removed = this.storage[keys[keys.length - 1]];
	delete this.storage[keys[keys.length - 1]];
	return removed;
};
