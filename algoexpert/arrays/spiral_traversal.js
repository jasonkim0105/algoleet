// Given an m x n matrix, return all elements of the matrix in spiral order.

var spiralOrder = function(matrix) {
  let result = [];
  let top = 0;
  let left = 0;
  let right = matrix[0].length;
  let bottom = matrix.length;

  while (left < right && top < bottom) {
      for (let i = left; i < right; i++) {
          result.push(matrix[top][i])
      }
      top++;

      for (let i = top; i < bottom; i++) {
          result.push(matrix[i][right - 1])
      }
      right--;

      if (!(left < right && top < bottom)){
          break;
      }

      for (let i = right - 1; i >= left; i--) {
          result.push(matrix[bottom - 1][i])
      }
      bottom--;

      for (let i = bottom - 1; i >= top; i--) {
          result.push(matrix[i][left])
      }
      left++
  }

  return result
};