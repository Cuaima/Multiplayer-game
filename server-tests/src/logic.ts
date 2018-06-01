export type Symbol = 'x' | 'o'
export type Row = [ Symbol | null, Symbol | null, Symbol | null, Symbol | null, Symbol | null, Symbol | null ]
export type Board = [ Row, Row, Row, Row, Row, Row, Row ]

export const emptyRow: Row = [null, null, null, null, null, null]

export const calculateWinner = (board: Board): Symbol | null => {
  //iterate through rows from the board -> 
  for (var row = 0; row < 7; row++){ 
  //if the row has a symbol
    for (var column = 0; column <= 6; column++){
      if (board[row][column] === null){
  //check if the next symbol is the same (four times?)
        let symbol = board[row][column]
        for (var nextIndex = 1; nextIndex <= 3; nextIndex++){
          if (symbol && symbol[nextIndex] === 'x'){
            return 'x'
          } else {
            console.log(symbol)
            return null
          }
        }
  //if the symbol is the same, we have a winner   
      }
    }
  }
  board[0];
  return null;
 
  
}

//   board
//     .concat(
//       // vertical winner
//       [0, 1, 2, 3].map(n => board.map(row => row[n])) as Row[]
//     )
//     .concat(
//       [
//         // diagonal winner ltr
//         [0, 1, 2, 3].map(n => board[n][n]),
//         // diagonal winner rtl
//         [0, 1, 2, 3].map(n => board[3-n][n])
//       ] as Row[]
//     )
//     .filter(row => row[0] && row.every(symbol => symbol === row[0]))
//     .map(row => row[0])[0] || null
