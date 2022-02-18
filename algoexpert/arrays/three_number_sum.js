function threeNumberSum(array, targetSum) {
  // Write your code here.
	//initialize result array
	//loop through array, ending at length - 2
	//if array[i] + array[i+1] + array[i+2] === targetSum, push [array[i], array[i+1], array[i+3]] into res array

	let res = [];
	array.sort((a,b) => a-b );
	for (let i = 0; i < array.length - 2; i++) {
		let left = i + 1;
		let right = array.length - 1;
		while (left < right) {
			let currentSum = array[i] + array[left] + array[right];
			if (currentSum === targetSum) {
				res.push([array[i], array[left], array[right]]);
				left++;
				right--;
			} else if (currentSum < targetSum){
				left++;
			} else if (currentSum > targetSum){
				right--;
			}
		}
	}
	return res
}

//o(n^2)