function isValidSubsequence(array, sequence) {
  // Write your code here.
	let arrayIdx = 0;
	let seqIdx = 0;
	while (arrayIdx < array.length && seqIdx < sequence.length) {
		if (array[arrayIdx] === sequence[seqIdx]) seqIdx++;
		arrayIdx++;
	}
	return seqIdx === sequence.length;
}
