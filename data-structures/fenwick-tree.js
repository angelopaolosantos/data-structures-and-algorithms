class FenwickTree {
    constructor(arraySize) {
        this.arraySize = arraySize
        this.treeArray = new Array(arraySize+1).fill(0)
        this.refArray = new Array(arraySize+1).fill(0)
    }

    add(position, value) {
        if(position < 1 || position > this.arraySize) {
            throw new Error(`Position not within array size of ${this.arraySize}`)
        }

        this.refArray[position] += value

        for(let i = position;i <= this.arraySize; i += (i & -i)){
            this.treeArray[i] += value
        }

        return this
    }

    query(position) {
        if(position < 1 || position > this.arraySize) {
            throw new Error(`Position not within array size of ${this.arraySize}`)
        }

        let sum = 0
        for(let i = position; i > 0; i -= (i & -i)) {
            sum += this.treeArray[i]
        }

        return sum
    }

    queryRange(leftPosition, rightPosition) {
        if(leftPosition > rightPosition) {
            throw new Error("Right position should always be greater than left position.")
        }

        if (leftPosition === 1) {
            return this.query(rightPosition)
        }

        return this.query(rightPosition) - this.query(leftPosition-1)
    }

}

const myFT = new FenwickTree(15)

console.log(myFT.refArray, myFT.treeArray)

for(let i=1;i<=15;i++) {
    console.log(i)
    myFT.add(i, i)
}
console.log(myFT.query(5))
console.log(myFT.query(1))
console.log(myFT.queryRange(1, 5))
console.log(myFT.refArray, myFT.treeArray)

console.log(myFT.query(3))
console.log(myFT.queryRange(3, 5))