// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.


// Constraints:

// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104

var merge = function(intervals) {
  let sorted = intervals.sort((a, b) => a[0] - b[0]); // [[1,3],[2,6],[8,10],[15,18]]
  let result = [sorted[0]]; // [[1,3]]
  for (let i = 1; i < sorted.length; i++) {

      let prev = result[result.length - 1]
      let prevStart = prev[0];
      let prevEnd = prev[1];

      let curr = sorted[i];
      let currStart = curr[0];
      let currEnd = curr[1];

      // Overlap
      if (currStart <= prevEnd && currEnd > prevEnd) {
          result = result.slice(0, result.length - 1);
          result.push([Math.min(prevStart, currStart), currEnd]);
      }

      // No Overlap
      if (currStart > prevEnd) result.push([currStart, currEnd]);
  }

  return result;
};