const re = /ab+c/
const re2 = new RegExp(/ab*c/g)

console.log(re.test("abc"))
console.log(re2.exec("abkabcpabc"))

console.log("string method search (index)", "abkabcpabc".search(re2))
console.log("string method match (array)", "abkabcpabc".match(re2))

for (let value of "abkabcpabc".matchAll(re2)){
    console.log(value)
}

const re3 = /^\([0-9]{3}\) [0-9]{3} [0-9]{4}$/

console.log(re3.test("(818) 370 4531"))