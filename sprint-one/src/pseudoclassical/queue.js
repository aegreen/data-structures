var Queue = function() {
   this.storage = {};
   this.count = 0;
};

Queue.prototype.size = function() {
	return Object.keys(this.storage).length;
};

Queue.prototype.enqueue = function(value) {
	this.storage[this.count] = value;
	this.count++;
};

Queue.prototype.dequeue = function() {
	var keys = Object.keys(this.storage).sort();
	var removed = this.storage[keys[0]];
	delete this.storage[keys[0]];
	return removed;
};
