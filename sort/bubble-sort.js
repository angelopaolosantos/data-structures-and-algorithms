function bubblesort(myArray) {
  const array = [...originalArray] 
  let swapped = false

  for (let i = 1; i < array.length; i++) {
    swapped = false
    for (let j = 0; j < array.length-i; j++) {
      if (array[j+1] < array[j]) {
        [array[j], array[j+1]] = [array[j+1], array[j]] // Deconstructing assignment, a swap function could also work.

        swapped = true
      }
    }

    if (!swapped) {
      return array
    }
  }

  return array
}