//Given two integers a and b, return the sum of the two integers without using the operators + and -.

var getSum = function(a, b) {
  if(b === 0) {
      return a;
  }
  return getSum(a ^ b, (a & b) << 1);
};