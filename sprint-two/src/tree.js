var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
	var childTree = new Tree(value);
	this.children.push(childTree);
};

treeMethods.contains = function(target){
	var doesContain = false;
	var checkChildren = function(node) {
		if (node.value === target) {
			doesContain = true;
			return;
		} else if (node.children.length === 0) {
			return;
		}
		for (var i = 0; i < node.children.length; i++) {
			if (node.children[i].value === target) {
				doesContain = true;
				return;
			}
			checkChildren(node.children[i]);
		}
	};
	
	checkChildren(this);
	
	return doesContain;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
