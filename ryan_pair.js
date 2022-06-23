/**
 * Check if a string has equal number of opening and closing brackets
 * "[](){}" "([)]"
 * "((()))"
 * "({]]"
 * ")("
**/


/** Balanced brackets
 * [(]) -> false
 * (([]))[{}]
 *
**/
const balancedBrackets = (str) => {
  // let stack = [];

  // const brackets = {
  //   '(' : ')',
  //   '[' : ']',
  //   '{' : '}'
  // }
  let count = 0;
  for (let char of str) {
    if (char = '(' || char = '[' || char = '{') count++;
    if (char = ')' || char = ']' || char = '}') count--
  }
  return count === 0
}

/**
 * Chessboard
 * given a chessboard (M X N) board. and a starting position (X1, Y1). Figure out
 * if you can reach destination (X2, Y2) moving only like a knight (L shape moves)
 *
 * ex:
 * board size: 10 x 12
 * starting at (0, 0) (top left corner)
 * destination is (9, 11) (bottom right corner)
 *
 * "strings" === "strings" will work
 * 123 === 123 will work
 * true === true will work
 *
 * objects {} === {} will not work
 * [] === [] will not work
 **/


const dfs = (visisted, location, destination) => {

}

const chessboard = (board, start, destination) => {
  let [startRow, startCol] = start
  let set = new Set(startRow + ',' + starCol);
  let queue = [[startRow, startCol]]


  while (queue.length) {
    const [row, col] = queue.shift()
    const [destRow, destCol] = destination
    if (row === destRow && col === destCol) return true

    const directions = [[-1, 2], [2, -1], [1, -2], [-2, 1], [-2,-1], [2, 1], [1, 2], [-1,-2]]

    for (let direction of directions) {
      const [dirRow, dirCol] = direction;
      const newRow = row + dirRow
      const newCol = col + dirCol;
      if ((0 <= newRow < board.length) && (0<=newCol < board[0].length) && !set.has(newRow + ',' + newCol) ) {
        set.add(newRow + ',' + newCol)
        queue.push([newRow, newCol])
      }
    }
  }
  return false
}

