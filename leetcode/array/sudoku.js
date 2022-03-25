/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
  let set = new Set();

  for(let r = 0; r < board.length; r++){
      for(let c = 0; c < board[r].length; c++){
          let val = board[r][c];

          if(val === '.')
              continue;

          //basically, formula is 3 * row + col --> to turn 2d array into 1d array
          //using Math.floor(row/3) + Math.floor(col/3) --> so we can find row and col of our sub box
          let boxNum = 3 * Math.floor(r/3) + Math.floor(c/3);

          let inRow = `row: ${r}, value: ${val}`;
          let inCol = `col: ${c}, value: ${val}`;
          let inSubBox = `subBox: ${boxNum}, value: ${val}`;

          if(set.has(inRow) || set.has(inCol) || set.has(inSubBox))
              return false;

          set.add(inRow);
          set.add(inCol);
          set.add(inSubBox);
      }
  }
  return true;
};