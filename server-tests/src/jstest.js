const board = [
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, 'x', 'x', 'x', 'x']
  ];
  
  const alltogether = board.concat()

// //   for row = 0 to 2:
// for(let rowIndex = 0; rowIndex <= 2; rowIndex++){
// //     for col = 0 to 6:
//     for(let colIndex = 0; colIndex <=6; colIndex++){
// //         if board[row][col] != 0 and
// //            board[row][col] == board[row+1][col] and
// //            board[row][col] == board[row+2][col] and
// //            board[row][col] == board[row+3][col]:
//         if (board[rowIndex][colIndex]
// //                return board[row][col]
//     }
// }

const test = board.map(row => 
    row
    .map(value => value === null ? "-" : value)      
    .join('')
    .match('xxxx')
    .filter(n => n !== null)
    ).length
    // .join('')
    

    // const winX = test.match('xxxx')
    // const winO = test.match('oooo')
    // if (winX){
    //     return 'x'
    // } else {
    //     return null
    // }
    
console.log(test)