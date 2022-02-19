// Given a string s, find the length of the longest substring without repeating characters.



// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

var lengthOfLongestSubstring = function(s) {
  let ans = [];
  let j = 0;
  let max = 0;
  while(j <= s.length) {
      if (!ans.includes(s[j])) {
          ans.push(s[j]);
      } else {
          if(max < ans.length) max = ans.length
          ans = [];
      }
      j++;
  }
  return max;
};

//O(n^2)

var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let longest = 0;
  let j = 0; i = 0;

  while(i < s.length && j < s.length) {
    if(!set.has(s[j])) {
      set.add(s[j]);
      longest = Math.max(longest, j - i + 1);
      j++;
    } else {
      set.delete(s[i]);
      i++;
    }
  }

  return longest;
}

//O(n)