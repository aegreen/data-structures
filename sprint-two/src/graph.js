

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
	this.storage = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
	this.storage[node] = {};
	this.storage[node].edges = [];
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
	for (var key in this.storage) {
		if (key === node) {
			return true;
		}
	}
	return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
	var removed = this.storage[node];
	delete this.storage[node];
	return removed;
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
	for (var i = 0; i < this.storage[fromNode].edges.length; i++) {
		if (this.storage[fromNode].edges[i] === toNode) {
			return true;
		}
	}
	return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
	this.storage[fromNode].edges.push(toNode);
	this.storage[toNode].edges.push(fromNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
	var fromEdgeIndex = this.storage[fromNode].edges.indexOf(toNode);
	this.storage[fromNode].edges.splice([fromEdgeIndex], 1)[0];
	var toEdgeIndex = this.storage[toNode].edges.indexOf(fromNode);
	this.storage[toNode].edges.splice([toEdgeIndex], 1)[0];
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
	for (var key in this.storage) {
		cb(key);
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



