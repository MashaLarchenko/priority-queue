const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.heap = new MaxHeap();
		if (maxSize == null ) {
			this.maxSize = 30;
		} else {
			this.maxSize = maxSize;
		}
		this.lenght = 0;
		this.head = null;
		this.tail = null;
	}

	push(data, priority) {
		if (this.size() == this.maxSize) {
			throw Error ("the queue has max size");
		} else {
			this.heap.push(data, priority);
		}
	
	}

	shift() {
		if (this.isEmpty()) {
			throw Error ("queue is empty");
		} else {
			let del = this.heap.pop();	
		    return del;
		}
	}

	size() {
		return this.heap.size();
	}

	isEmpty() {
		return this.heap.isEmpty()
	}
}

module.exports = PriorityQueue;
