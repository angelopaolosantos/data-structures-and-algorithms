class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }
    const toRemove = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = toRemove.previous;
      this.tail.next = null;
      toRemove.previous = null;
    }

    this.length--;

    return toRemove;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }

    const toRemove = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.previous = null;
      toRemove.next = null;
    }

    this.length--;

    return toRemove;
  }

  unshift(value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head.previous = newNode
      newNode.next = this.head
      this.head = newNode
    }

    this.length++

    return this
  }

  get(index) {
    if (index < 0 || index >= this.length) return null
    let count, currentNode
    if (index < this.length/2) {
      currentNode = this.head
      count = 0
      while(count !== index) {
        currentNode = currentNode.next
        count++
      }
    } else {
      count = this.length - 1
      currentNode = this.tail
      while (count !== index) {
        currentNode = this.currentNode.previous
        count--
      }
    }

    return currentNode
  } 

  set(index, value) {
    const updateNode = get(index)
    if (updateNode !== null){
      updateNode.value = value
      return true
    }
    return false
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) return false
    if (index === 0 ) return this.unshift(value)
    if (index === this.length - 1) return this.push(value)

    const newNode = new Node(value)
    const previousNode = this.get(index-1)
    const nextNode = previousNode.next

    previousNode.next = newNode
    newNode.previous = previousNode
    newNode.next = nextNode
    nextNode.previous = newNode

    this.length++

    return true
  }
}
