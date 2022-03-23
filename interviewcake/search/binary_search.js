function binarySearch(target, nums) {
  let mid = Math.floor(nums.length/2);
  if (nums.length === 0) return -1;

  if (target[mid] === target) {
    return true;
  } else if (target[mid] < target) {
    return binarySearch(target, nums.slice(0, mid))
  } else if (target[mid] > target) {
    return binarySearch(target, nums.slice(mid+1, nums.length - 1))
  }
  return false
}