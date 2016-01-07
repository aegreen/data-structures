var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
	this._storage[item] = item;
};

setPrototype.contains = function(item){
	for (var key in this._storage) {
		if (key === item) {
			return true;
		}
	}
	return false;
};

setPrototype.remove = function(item){
	if (Object.keys(this._storage).indexOf(item) > -1) {
		var removed = this._storage[item];
		delete this._storage[item];
		return removed;
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
