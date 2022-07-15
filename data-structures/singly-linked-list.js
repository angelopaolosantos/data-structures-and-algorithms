class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Adds node to tail of the list
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      // if list is empty
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // Removes the tail of the list
  pop() {
    if (!this.head) return undefined; // or null
    const currentNode = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      const newTail = currentNode;
      while (!currentNode.next) {
        newTail = currentNode; // set newTail is pointer to next to last node
        currentNode = currentNode.next; //
      }
      this.tail = newTail;
      this.tail.next = null;
    }

    this.length--;

    return currentNode.value;
  }

  shift() {
    if (!this.head) return undefined; // or null

    const currentNode = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    this.length--;

    return currentNode.value;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      // list is empty
      this.head = newNode;
      this.tail = newNode;
    } else {
      let temp = this.head; // store existing list in temp
      this.head = newNode;
      this.head.next = temp; // append existing list to new head
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index > this.length) return null;
    let count = 0;
    let currentNode = null;

    count = 0;
    currentNode = this.head;
    while (count !== index) {
      currentNode = currentNode.next;
      count++;
    }

    return currentNode;
  }

  set(index, value) {
    let currentNode = this.get(index);
    if (!currentNode) {
      currentNode.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    const newNode = new Node(value);
    const prevNode = this.get(index - 1);
    const temp = prevNode.next;
    prevNode.next = newNode;
    newNode.next = temp;
    this.length++;

    return this;
  }

  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    const prevNode = this.get(index - 1);
    const toRemove = prevNode.next;
    prevNode.next = toRemove.next;

    this.length--;

    return toRemove;
  }

  reverse() {
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    let nextNode,
      previousNode = null;

    for (let i = 0; i < this.length; i++) {
      nextNode = currentNode.next; // save original currentNode.next

      currentNode.next = previousNode; // update next node to be the previous node, reverse direction of next.

      // then shift pointers forward for next iteration, previusNode is now the currentNode. The original currentNode.next is now the current node
      previousNode = currentNode;
      currentNode = nextNode; // the original currentNode.next is now the current node
    }
    return this;
  }
}
