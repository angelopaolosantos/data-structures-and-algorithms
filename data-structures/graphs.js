// Adjancency list represented as an object

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addNode(node) {
    // node is the key or identifier of the node
    if (!this.adjacencyList[node]) this.adjacencyList[node] = [];
  }

  addConnection(node1, node2) {
    if (this.adjacencyList[node1].indexOf(node2) === -1) {
      this.adjacencyList[node1].push(node2); // potential for duplicates
    }
    if (this.adjacencyList[node2].indexOf(node1) === -1) {
      this.adjacencyList[node2].push(node1);
    }
  }

  removeConnection(node1, node2) {
    this.addConnection[node1] = this.addConnection[node1].filter(
      (node) => node !== node2
    );
    this.addConnection[node2] = this.addConnection[node1].filter(
      (node) => node !== node1
    );
  }
  
  bfs(node1, node2) {
    let visited = new Set()
    let queue = []
    visited.add(node1)
    queue.push(node1)

    while (queue.length > 0) {
      let currentNode = queue.shift()
      if (currentNode === node2) return Array.from(visited)
      // console.log(this.adjacencyList[currentNode])  
      for (let childNode of this.adjacencyList[currentNode]) {
        if(!visited.has(childNode)){
          queue.push(childNode)
          visited.add(childNode)
        }
      }
    }
    
    return false
  }

  dfs(node1, node2) {
    let visited = new Set()
    let stack = []
    visited.add(node1)
    stack.push(node1)

    while (stack.length > 0) {
      let currentNode = stack.pop()
      if (currentNode === node2) return Array.from(visited)
      // console.log(this.adjacencyList[currentNode])  
      for (let childNode of this.adjacencyList[currentNode]) {
        if(!visited.has(childNode)){
          stack.push(childNode)
          visited.add(childNode)
        }
      }
    }
    
    return false
  }
}

const Argentina = new Graph()
Argentina.addNode("Buenos Aires")
Argentina.addNode("Santa fe")
Argentina.addNode("Córdoba")
Argentina.addNode("Mendoza")
Argentina.addNode("Las Vegas")
Argentina.addConnection("Buenos Aires", "Córdoba")
Argentina.addConnection("Buenos Aires", "Córdoba")
Argentina.addConnection("Buenos Aires", "Mendoza")
Argentina.addConnection("Santa fe", "Córdoba")
Argentina.addConnection("Santa fe", "Las Vegas")


console.log(Argentina)
console.log(Argentina.bfs("Santa fe", "Las Vegas" ))