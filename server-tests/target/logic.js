"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emptyRow = [null, null, null, null, null, null];
exports.calculateWinner = (board) => board
    .concat([0, 1, 2, 3].map(n => board.map(row => row[n])))
    .concat([
    [0, 1, 2, 3].map(n => board[n][n]),
    [0, 1, 2, 3].map(n => board[3 - n][n])
])
    .filter(row => row[0] && row.every(symbol => symbol === row[0]))
    .map(row => row[0])[0] || null;
//# sourceMappingURL=logic.js.map