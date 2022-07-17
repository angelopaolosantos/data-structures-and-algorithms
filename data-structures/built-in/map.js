const myMap = new Map()

myMap.set("LAX", new Set())
myMap.set("SFO", new Set())
myMap.set("JFK", new Set())
myMap.set("MNL", new Set())
myMap.delete("MNL")
myMap.has("LAX")
myMap.clear()

myMap.set("LAX", new Set())
myMap.set("SFO", new Set())
myMap.set("JFK", new Set())
console.log("size", myMap.size)
console.log("has JFK", myMap.has("JFK"))
console.log("get SFO", myMap.get("SFO"))
myMap.forEach((value, key, map)=>{
    console.log("key", key)
    console.log("value", value)
    console.log("map size", map.size)
})

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

myMap.get("LAX").add("SFO")

console.log(myMap.get("LAX"))


