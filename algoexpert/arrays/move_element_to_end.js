function moveElementToEnd(array, toMove) {
  // Write your code here.
	let i = array.length - 1;
	while (i >= 0) {
		if (array[i] === toMove) {
			array.push(array[i])
			array.splice(i, 1)
			i--;
		} else {
			i--;
		}
	}
	return array
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;