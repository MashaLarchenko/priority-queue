const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.heapSize = 0;
	}

	push(data, priority) {
		let nodeN = new Node(data, priority);
		 this.insertNode(nodeN);
		 this.shiftNodeUp(nodeN);
		 this.heapSize+=1;
	}

	pop() {
		if(!this.isEmpty()) {
		this.heapSize -=1; 
		let d = this.detachRoot();
		this.restoreRootFromLastInsertedNode(this.detachRoot());
		this.shiftNodeDown(this.root);
		return d.data;
		}
	}

	detachRoot() {
		let dRoot = this.root;	
		 if (this.parentNodes[0] == dRoot) {
			 this.parentNodes.shift();
		 }
		 this.root = null;
		return dRoot;
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		return this.heapSize;		
	}

	isEmpty() {
		return (this.heapSize == 0) ;		
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
		this.heapSize = 0;
		
	}

	insertNode(node) {

		if (this.root == null) {
			this.root  = node;
			this.parentNodes.push(node);
		} else  {
			let current = this.parentNodes[0];
		     if (current.left == null) {
				 current.left = node;
				 this.parentNodes.push(node);
			 } else {
				 current.right = node;
				 this.parentNodes.shift();
				 this.parentNodes.push(node);
			 }
	      }
      }

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
