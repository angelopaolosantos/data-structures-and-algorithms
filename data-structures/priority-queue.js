class Node {
  constructor(val, priority) {
    this.value = val;
    this.priority = priority;
    this.next = null;
  }
}

class PriorityQueue {
  constructor() {
    this.heap = [null]
  }

  insert(value, priority) {
    const newNode = new Node(value, priority)
    this.heap.push(newNode) // new node added to end of array
    let currentNodeIdx = this.heap.length - 1 // index is array length - 1
    let currentNodeParentIdx = Math.floor(currentNodeIdx / 2) // heap's parent id is id/2

    while (this.heap[currentNodeParentIdx] && newNode.priority > this.heap[currentNodeParentIdx].priority) {
      const parent = this.heap[currentNodeParentIdx]
      this.heap[currentNodeParentIdx] = newNode
      this.heap[currentNodeIdx] = parent
      currentNodeIdx = currentNodeParentIdx;
      currentNodeParentIdx = Math.floor(currentNodeIdx / 2);
    }
  }

  remove() {
    if (this.heap.length < 3) { // either [null] or [null, value1]
      const toReturn = this.heap.pop();
      this.heap[0] = null; // heap is now empty, always keep a null as first value
      return toReturn;
    }
    const toRemove = this.heap[1]; // copy the root of the tree to a variable
    this.heap[1] = this.heap.pop(); // move the last value as the new root of the tree
    let currentIdx = 1; // we now need to heapify value from the root
    let [left, right] = [2*currentIdx, 2*currentIdx + 1]; // get left and right index of the current nodes children
    let currentChildIdx = this.heap[right] && this.heap[right].priority >= this.heap[left].priority ? right : left; // pick child with highest priority
    while (this.heap[currentChildIdx] && this.heap[currentIdx].priority <= this.heap[currentChildIdx].priority) { // while there is a child and childs priority is higher, move it up the tree
      let currentNode = this.heap[currentIdx]
      let currentChildNode = this.heap[currentChildIdx];
      this.heap[currentChildIdx] = currentNode;
      this.heap[currentIdx] = currentChildNode;
    }
    return toRemove;
  }
}