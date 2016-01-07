var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[i];
  if (bucket) {
    for (var j = 0; j < bucket.length; j++) {
      if (bucket[j][0] === k) {
        bucket[j][1] = v;
      }
    }
    bucket.push([k, v]);
  } else {
    bucket = [];
    bucket.push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[i];
  for (var l = 0; l < bucket.length; l++) {
  	if (bucket[l][0] === k) {
  		return bucket[l][1];
  	}
  }
  return null;
};

HashTable.prototype.remove = function(k){

};



/*
 * Complexity: What is the time complexity of the above functions?
 js:25:29)
   
 */
