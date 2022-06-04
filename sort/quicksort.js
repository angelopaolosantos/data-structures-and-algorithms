function quicksort(myArray) {
  const array = [...myArray]
  
  if (array.length <= 1) {
    return array
  }
  
  const leftArray = []
  const rightArray = []

  const pivotElement = array.shift() // to use first element as a pivot or array.pop() to use last element. Any element can be used as a pivot
  const centerArray = [pivotElement]

  while(array.length) {
    const currentElement = array.shift()

    if (currentElement == pivotElement) {
      centerArray.push(currentElement)
    } else if (currentElement < pivotElement) {
      leftArray.push(currentElement)
    } else {
      rightArray.push(currentElement)
    }
  }

  const leftArraySort = quicksort(leftArray)
  const rightArraySort = quicksort(rightArray)

  return [...leftArraySort, ...centerArray, ...rightArraySort]

}

const testArray = []
const entries = 25
const max = 100

for (let x = 0; x < entries; x++) { 
  testArray.push(Math.floor(Math.random() * max))
}

console.log("Before Sort: ", testArray)
// let start = window.performance.now();
console.time('Execution Time');

console.log("After Sort: ", quicksort(testArray))

// let end = window.performance.now();
// console.log(end - start)

console.timeEnd('Execution Time');

console.time('Execution Time');
console.log("Javascript Sort Function", testArray.sort())
console.timeEnd('Execution Time');