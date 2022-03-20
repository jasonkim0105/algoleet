// Given an array of integers, find the highest product you can get from three of the integers.

// The input arrayOfInts will always have at least three integers.

// function highestProduct(array) {
//   array.sort((a,b) => b - a)
//   let product = array[0] * array[1] * array[2];
//   return product
// }
// O(nlogn)

function highestProduct(array) {
  let highestProductOf3 = array[0] * array[1] * array[2];
  let highestProductOf2 = array[0] * array[1];
  let lowestProductOf2 = array[0] * array[1];
  let highest = Math.max(array[0], array[1]);
  let lowest = Math.min(array[0], array[1]);
  for (let i = 2; i < array.length; i++) {
    const current = array[i];
    highestProductOf2 = Math.max(highestProductOf2, highest * current)
    lowestProductOf2 = Math.min(lowestProductOf2, lowest * current)
    highestProductOf3 = Math.max(highestProductOf2 * current, lowestProductOf2 * current, highestProductOf3)
    highest = Math.max(highest, current);
    lowest = Math.min(lowest, current);

  }
  return highestProductOf3;
}

let arrayOfInts = [3, 23, 2, 3, 5];
const arrayOfInt = [1, 10, -5, 1, -100]
console.log(highestProduct(arrayOfInt))