const mySet = new Set()

mySet.add(1)
mySet.add(2)
mySet.delete(2)
mySet.clear()
mySet.add("one")
mySet.add("two")
mySet.add("three")
console.log("size", mySet.size)
console.log("has 1", mySet.has(1))
mySet.forEach((value)=>console.log("forEach",value))
console.log(mySet.entries())
console.log(mySet.keys())
console.log(mySet.values())
for(let keys of mySet.keys()) {
    console.log(keys)
}