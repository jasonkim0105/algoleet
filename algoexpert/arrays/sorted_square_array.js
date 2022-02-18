function sortedSquaredArray(array) {
  // Write your code here.
  let res = [];
	array.forEach(num => {
		res.push(num*num)
	})
	return res.sort((a,b) => a-b);
}