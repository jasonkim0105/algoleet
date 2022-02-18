// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.



// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]


// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.


// Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

var productExceptSelf = function(nums) {
  // initialize length of arr
  // initialize answer arr
  // iterate from left to right, multiply answer[i-1] with nums[i-1] to get product for that index

  // initialize product of right to 1
  // iterate from right to left, multiply the product of right by answer[i]
  // multiply and save new value of product of right with nums[i];

  //return answer arr

  let length = nums.length;
  let ans = new Array(length);

  ans[0] = 1;
  for(let i = 1; i < length; i++) {
      ans[i] = ans[i-1] * nums[i-1];
  }

  let R = 1;
  for(let i = length-1; i >= 0; i--) {
      ans[i] = R * ans[i];
      R *= nums[i];
  }

  return ans;
};

//O(n)