function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const middleIndex = Math.floor(array.length / 2);
  const arrayLeft = array.slice(0, middleIndex);
  const arrayRight = array.slice(middleIndex, array.length);

  const arrayLeftSorted = mergeSort(arrayLeft);
  const arrayRightSorted = mergeSort(arrayRight);

  return merge(arrayLeftSorted, arrayRightSorted)
}

function merge(leftArray, rightArray) {
  let sortedArray = [];

  let leftIndex = 0
  let rightIndex = 0

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    let minElement = null
    if (leftArray[leftIndex]<=rightArray[rightIndex]) {
      minElement = leftArray[leftIndex]
      leftIndex++
    } else {
      minElement = rightArray[rightIndex]
      rightIndex++
    }
    sortedArray.push(minElement)
  }

  return sortedArray.concat(leftArray.slice(leftIndex).concat(rightArray.slice(rightIndex)))
}
const newArray = [1, 2, 3, 3, 5, 1, 7, 6, 9, 10];

mergeSort(newArray);

console.log(newArray);
