// You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.

// Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

// For example, given:

//   [1, 7, 3, 4]

// JavaScript
// your function would return:

//   [84, 12, 28, 21]

// JavaScript
// by calculating:

//   [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]

// JavaScript
// Here's the catch: You can't use division in your solution!

// function productOfOther(array) {
//   let answer = []
//   for (let i = 0; i < array.length; i++) {
//     let current = array[i];
//     let multiple = 1;
//     for (let j = 0; j < array.length; j++) {
//       if (j !== i) {
//         multiple *= array[j]
//       }
//     }
//     answer.push(multiple)

//   }
//   return answer;
// }
//o(n^2)

function productOfOther(array) {
  const allProductExceptIdx = []
  let currentProduct = 1;
  for (let i = 0; i < array.length; i++) {
    allProductExceptIdx[i] = currentProduct;
    currentProduct *= array[i];
  }
  currentProduct = 1;
  for (let j = array.length - 1; j >= 0; j--) {
    allProductExceptIdx[j] = currentProduct;
    currentProduct *= array[j];
  }
  return allProductExceptIdx
}

const arrayExample = [1, 2, 6, 5, 9];
console.log(productOfOther(arrayExample))