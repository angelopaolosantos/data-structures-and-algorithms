let myArray = new Array()

myArray = myArray.concat(["a","b","c"])
console.log(myArray)
myArray.push("d")
myArray.push("e")
console.log(myArray)
console.log(myArray.pop())
console.log(myArray.shift())
myArray.unshift("z")
console.log(myArray)
console.log("length", myArray.length)
console.log("includes z", myArray.includes("z"))

myArray.forEach((value, key, array) => {
    console.log("key", key)
    console.log("value", value)
    console.log("array length", array.length)
})

console.log("map", myArray.map((value)=>{
    return `${value}-map`
}))

console.log("filter", myArray.filter((value)=>{
    if(value==="z") {
        return false
    }
    return true
}))

console.log("reduce", myArray.reduce((prev, curr, currIndex, array) => {
    console.log("current index", currIndex)
    console.log("array length", array.length)
    return prev.concat(curr)
}))

console.log(myArray.values())
console.log(myArray.keys())
console.log(myArray.entries())

for(let [key, value] of myArray.entries()){
    console.log(key, value)
}

console.log("index of z", myArray.indexOf("z"))
console.log(myArray.join(","))
console.log(myArray.every((value)=>{
    return true
}))
console.log(myArray.some((value)=>{
    return true
}))

console.log(myArray.slice(2, 5))
console.log("slice", myArray)
console.log(myArray.splice(2, 5))
console.log("splice", myArray)