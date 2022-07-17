let myString = "The quick brown fox jumped over the lazy dog"

console.log(myString.length)
console.log(myString.charAt(0))
console.log(myString[0])
console.log(myString.includes("fox"))
console.log(myString.concat("."))
console.log(myString)
console.log(myString.indexOf("fox"))
for(let value of myString.matchAll(/\s/g)) {
    console.log(value)
}

myString.toUpperCase()
myString.toLowerCase()
console.log(myString.split(" "))
console.log(myString.slice(4, 7)) // indexStart, indexEnd
console.log(myString.endsWith("dog"))
console.log(myString.startsWith("The"))
console.log(myString.replace("brown", "red"))
console.log(myString.search("The"))