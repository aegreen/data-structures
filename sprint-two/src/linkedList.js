var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var addedNode = new Node(value);
    if (this.head === null) {
      this.head = addedNode;
      this.tail = addedNode;
    } else if (this.head.next = null) {
      this.head.next = addedNode;
      this.tail = addedNode;
    } else {
      var oldTail = this.tail;
      oldTail.next = addedNode;
      this.tail = addedNode;
    }
  };

  list.removeHead = function(){
    var oldHead = this.head;
    var newHead = this.head.next;
    this.head = newHead;
    return oldHead.value;
  };

  list.contains = function(target){
    var nodeTester = function(node, target) {
      while(node) {
        if (node.value === target) {
          return true;
        }
        node = node.next;
      }
      return false;
    }
    return nodeTester(this.head, target);
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
