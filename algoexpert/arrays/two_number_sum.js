function twoNumberSum(array, targetSum) {
  // Write your code here.
	let answer = [];
	for (let i = 0; i < array.length; i++) {
		for (let j = i+ 1; j < array.length; j++) {
			if (array[i] + array[j] === targetSum){
				answer.push(array[i]);
				answer.push(array[j]);
				return answer;
			}
		}
	}
	return []
}

