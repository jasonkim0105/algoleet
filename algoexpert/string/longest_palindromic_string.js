function longestPalindromicSubstring(string) {
  // Write your code here.
	let longest = '';
	for (let i = 0; i < string.length; i++) {
		for (let j = i; j < string.length; j++) {
			const substring = string.slice(i, j+ 1);
			if (substring.length > longest.length && isPalin(substring)) {
				longest = substring;
			}
		}
	}
	return longest
}
function isPalin(string) {
	let left = 0;
	let right = string.length - 1;
	while (left < right) {
		if (string[left] !== string[right]) return false
		left++;
		right--;
	}
	return true
}

// Do not edit the line below.
exports.longestPalindromicSubstring = longestPalindromicSubstring;