class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class Stack {
	constructor() {
    this.top = null
    this.bottom = null
    this.size = 0
	}
  push(value) {
    let newNode = new Node(value)
    if (!this.top) {
      this.top = newNode
      this.bottom = newNode
    } else {
      let temp = this.top
      this.top = newNode
      this.top.next = temp

    }
  	return ++this.size
	}
  pop() {
	  
    if(!this.top) return null
        var temp = this.top
        if(this.top === this.bottom){
            this.last = null
        }
        this.top = this.top.next
        this.size--
        return temp.value
	}
}