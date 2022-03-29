function firstNonRepeatingCharacter(string) {
  // Write your code here.
	let hash = {};

	for (let char of string) {
		if (!hash[char]) {
			hash[char] = 1
		} else {
			hash[char]++
		}
	}
	for (let i = 0; i < string.length; i++) {
		if (hash[string[i]] === 1) {
			return i
		}
	}
	return -1
}

// Do not edit the line below.
exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;