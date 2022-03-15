// Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome. ↴

// You can assume the input string only contains lowercase letters.

// Examples:

// "civic" should return true
// "ivicc" should return true
// "civil" should return false
// "livci" should return false


// function permutationPalindrome(string) {
//   let obj = {};
//   for (let i = 0; i < string.length; i++) {
//     let char = string[i];
//     if (!obj[char]) {
//       obj[char] = 1;
//     } else {
//       obj[char]++
//     }
//   }
//   console.log(obj)
//   for (let char in obj) {
//     if (obj[char] % 2 === 0 || obj[char] === 1) {
//       return true
//     }
//   }
//   return false;
// }

function permutationPalindrome(string) {
  let palindromeSet = new Set();

  for (let char of string) {
    if (palindromeSet.has(char)) {
      palindromeSet.delete(char);
    } else {
      palindromeSet.add(char)
    }
  }
  console.log(palindromeSet)

  return palindromeSet.size <= 1;
}

let bob = 'ivicc';
console.log(permutationPalindrome(bob))