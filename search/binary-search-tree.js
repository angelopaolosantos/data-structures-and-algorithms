class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(value, node = this.root) {
    let currentNode = node;
    const newNode = new Node(value);
    if (currentNode === null) {
      this.root = newNode;
      return this;
    }

    if (value === currentNode.value) return undefined;

    if (value < currentNode.value) {
      if (currentNode.left === null) {
        currentNode.left = newNode;
        return this;
      }
      currentNode = currentNode.left;
    } else {
      if (currentNode.right === null) {
        currentNode.right = newNode;
        return this;
      }
      currentNode = currentNode.right;
    }

    this.add(value, currentNode);
  }

  find(value) {
    if (this.root === null) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  contains(value) {
    if (this.root === null) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
}
