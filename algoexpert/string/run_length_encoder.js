function runLengthEncoding(string) {
  // Write your code here.
	let res = [];
	let currentRunLength = 1;

	for (let i = 1; i < string.length; i++) {
		const current = string[i];
		const prev = string[i - 1];

		if (current !== prev || currentRunLength === 9) {
			res.push(currentRunLength.toString());
			res.push(prev)
			currentRunLength = 0;
		}
		currentRunLength++
	}
	res.push(currentRunLength.toString())
	res.push(string[string.length - 1])
	return res.join('')
}

// Do not edit the line below.
exports.runLengthEncoding = runLengthEncoding;