function quicksort(myArray,inputLowIndex=0,inputHighIndex=myArray.length-1,recursiveCall=false) {
  const array = recursiveCall ? myArray : [...myArray] // copies array on initial call, then sorts in place (sorts on copied array)

  const partitionArray = (lowIndex, highIndex) => {
    
    const swap = (leftIndex, rightIndex) => {
      const temp = array[leftIndex]
      array[leftIndex] = array[rightIndex]
      array[rightIndex] = temp
    }

    const pivot = array[highIndex]
    let partitionIndex = lowIndex;
    for (let currentIndex = lowIndex; currentIndex < highIndex; currentIndex++) {
      if (array[currentIndex] < pivot) {
        swap(currentIndex, partitionIndex)
        partitionIndex++
      }

    }
    swap(partitionIndex, highIndex)
    // [array[partitionIndex], array[highIndex]] = [array[highIndex], array[partitionIndex]] Destructuring could also be used to swap

    return partitionIndex
  }

  if (inputLowIndex < inputHighIndex) {
    const partitionIndex = partitionArray(inputLowIndex, inputHighIndex)
    const RECURSIVE_CALL = true
    quicksort(array, inputLowIndex, partitionIndex-1, RECURSIVE_CALL)
    quicksort(array, partitionIndex+1, inputHighIndex, RECURSIVE_CALL)
  }

  return array
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
console.log("test", testArray)
// let end = window.performance.now();
// console.log(end - start)

console.timeEnd('Execution Time');

console.time('Execution Time');
console.log("Javascript Sort Function", testArray.sort())
console.timeEnd('Execution Time');