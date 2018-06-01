export type Symbol = 'x' | 'o'
export type Row = [ Symbol | null, Symbol | null, Symbol | null, Symbol | null, Symbol | null, Symbol | null ]
export type Board = [ Row, Row, Row, Row, Row, Row, Row ]

export const emptyRow: Row = [null, null, null, null, null, null]

export const calculateWinner = (board: Board) => {
 
//   const test = board.map(row => 
//     row
//     .map(value => value === null ? "-" : value)      
//     .join('')
//     )
//     .join('')
//     // .match('xxxx' || 'oooo')

//     const winX = test.match('xxxx')
//     const winO = test.match('oooo')
//     if (winX){
//         return 'x'
//     } else if (winO){
//         return 'o'
//     }else {
//         return null
//     }

const test = board.map(row => 
    row
    .map(value => value === null ? "-" : value)      
    .join('')
    .match(/oooo|xxxx/)
    ).join('')
    .length
  
  if (test > 0){
      return 'x'
  } else {
      return null
  }
    // return null
  }


