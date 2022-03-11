// A peak element is an element that is strictly greater than its neighbors.

// Given an integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

// You may imagine that nums[-1] = nums[n] = -∞.

// You must write an algorithm that runs in O(log n) time.

function peakElement(array) {	//[1, 2, 3, 2]
	let peak = undefined;
	if (array.length === 1) return 0;

	for (let i = 0; i <= array.length; i++) { //1
let current = array[i];
let next = array[i + 1];
let prev = array[i - 1]
if (i === 0 && current > next ){ 	//1
	peak = i
	next
}
if (i === array.length - 1 && current > prev) {
  peak = i	//3
}
if (current > next && current > prev) {		//
	peak = i
}
}
return peak;	//3
}
//O(n)
