// Sort the integers.

// Given a permutation of from 1 to n (an array), the only way you have to change it is to select any integer and put it into the end of the list.


// arr[] = {5, 1, 4, 3, 2}
// Return 3
//{5, 1, 4, 3, 2}  -> {5, 1, 4, 2, 3}  -> {5, 1, 2, 3, 4}-> {1, 2, 3, 4, 5}

// arr[] = {2, 1, 4, 3, 5}
// Return 4
//{2, 1, 4, 3, 5} -> {1, 4, 3, 5, 2} ->{1, 4, 5, 2, 3}- > {1, 5, 2, 3, 4} -> {1, 2, 3, 4, 5}

//can move each number to back once
//if x, would only need to move numbers larger than x


function permutation(arr) {
  let count = 0;
  let n = 1;
  let x = 1;
  while (n !== arr.length - 1) {
      if (arr[n] === x) {
          x++;
      }
      n++
  }
  return arr.length - x
}

console.log(permutation([5, 1, 4, 3, 2]))




