class Node {
	constructor(data, priority) {
		this.data = data;
		this.left = null;
		this.right = null;
		this.parent = null;
		this.priority = priority;
		this.next = null;
	}

	appendChild(node) {
		if (this.left == null) {
			this.left = node;
			node.parent = this;
		} else if (this.right == null) {
			this.right = node;
			node.parent = this;
		}
	}

	removeChild(node) {
		if (node == this.left) {
			this.left = null;
			node.parent = null;
		} else if (node == this.right) {
			this.right = null;
			node.parent = null;
		} else {
			throw Error("not a child of this node");
		}

	}

	remove() {
		if (this.parent != null) {
			this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		if (this.parent == null) {
			return;
		}
		let parent = this.parent;
		let grandp = this.parent.parent;
		let childLeft = this.left;
		let childRight = this.right;
		let parentLeft = this.parent.left;
		let parentRight = this.parent.right;

		if (parentLeft == this) {
			this.left = parent;
			this.right = parentRight;
			if (this.right != null) this.right.parent = this;
		} else {
			this.right = parent;
			this.left = parentLeft;
			if (this.left != null) this.left.parent = this;
		}
		
		this.parent = grandp;
		parent.parent = this;
		parent.left = childLeft;
		parent.right = childRight;

		if (this.parent != null) {
			if (this.parent.left == parent) {
				grandp.left = this;
			} else {
				grandp.right = this;
			}
		}
	}
}

module.exports = Node;
