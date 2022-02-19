function binarySearch(array, target) {
  // Write your code here.if (arr.length === 0) return -1;
	if (array.length === 0) return -1;

  let mid = Math.floor(array.length/2);

  if (array[mid] === target){
    return mid;
  } else if(array[mid] > target) {
    return binarySearch(array.slice(0, mid), target);
  } else {
    const searched = binarySearch(array.slice(mid + 1), target);
    return searched === -1 ? -1 : searched + mid + 1;
  }
}