function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
	let arrayOneSorted = arrayOne.sort((a, b) => a-b);
	let arrayTwoSorted = arrayTwo.sort((a, b) => a-b);
  let pointerOne = 0;
  let pointerTwo = 0;
  let current;
  let smallest;
  let answer = [];

  while(pointerOne < arrayOneSorted.length && pointerTwo < arrayTwoSorted.length) {
    let firstNum = arrayOneSorted[pointerOne];
    let secondNum = arrayTwoSorted[pointerTwo];
    if (firstNum < secondNum) {
      current = secondNum - firstNum;
      pointerOne++;
    } else if (secondNum < firstNum) {
      current = firstNum - secondNum;
      pointerTwo++;
    } else {
      return [firstNum, secondNum]
    }

    if (smallest > current) {
      smallest = current;
      answer = [firstNum, secondNum]
    }
    return answer;
  }

}

exports.smallestDifference = smallestDifference;

arrayOne = [-1, 5, 10, 20, 28, 3]
arrayTwo = [26, 134, 135, 15, 17]
smallestDifference(arrayOne, arrayTwo)
