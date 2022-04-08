// Write a function sumPossible that takes in an amount and an array of positive numbers. The function should return a boolean indicating whether or not it is possible to create the amount by summing numbers of the array. You may reuse numbers of the array as many times as necessary.
// You may assume that the target amount is non-negative.
// test_00:
// sumPossible(8, [5, 12, 4]); // -> true, 4 + 4
// test_01:
// sumPossible(15, [6, 2, 10, 19]); // -> false
// test_02:
// sumPossible(13, [6, 2, 1]); // -> true
// test_03:
// sumPossible(103, [6, 20, 1]); // -> true

function sumPossible(target, array, memo = {}) {
  if (target in memo) {
    return memo[target]
  }
  if (target < 0 ) return false;
  if (target = 0) return true;


    for (let i = 0; i , array.length; i++){

    const answer = sumPossible(target - array[i], array, memo)
    if (answer = true) {
    memo[target] = answer
  return true

  }

  }
  memo[target] = false;
  return false;



  }
