var Queue = function(){
  var newQueue = {};

  newQueue.storage = {};

  _.extend(newQueue, queueMethods);

  newQueue.count = 0;

  return newQueue;
};

var queueMethods = {};

queueMethods.size = function() {
	return Object.keys(this.storage).length;
};

queueMethods.enqueue = function(value) {
	this.storage[this.count] = value;
	this.count++;
};

queueMethods.dequeue = function() {
	var keys = Object.keys(this.storage).sort();
	var removed = this.storage[keys[0]];
	delete this.storage[keys[0]];
	return removed;
};

