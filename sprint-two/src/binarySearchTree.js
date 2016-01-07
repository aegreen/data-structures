var BinarySearchTree = function(value){
  this.value = value;
  this.left = {};
  this.right = {};
};

BinarySearchTree.prototype.insert = function(value) {
  if( value < this.value ){
    if ( this.left.value ){
      this.left.insert(value, this.left);
    } else {
      this.left = new BinarySearchTree(value);
      return this.left;
    }
  } else {
    if ( this.right.value ){
      this.right.insert(value, this.right);
    } else {
      this.right = new BinarySearchTree(value);
      return this.right;
    }
  }
  return value;
};

BinarySearchTree.prototype.contains = function(value) {
  if (value === this.value){
    return true;
  } else if ( value < this.value && this.left.value ) {
    return this.left.contains(value);
  } else if ( value > this.value && this.right.value ){
    return this.right.contains(value);
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left.value){
    return this.left.depthFirstLog(cb);
  }
  if (this.right.value){
    return this.right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
