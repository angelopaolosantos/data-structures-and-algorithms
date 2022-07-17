let myObject = new Object()
myObject = { 
    "LAX": {},
    "SFO": {},
    "JFK": {}
}

console.log(myObject.LAX)
console.log(myObject["LAX"])
console.log("hasOwnProperty", myObject.hasOwnProperty("LAX"))

delete myObject.JFK
console.log(myObject)

for(let key in myObject){
    console.log(key)
}

console.log(Object.entries(myObject))
console.log(Object.keys(myObject))
console.log(Object.values(myObject))