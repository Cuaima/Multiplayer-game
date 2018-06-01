import 'mocha'
import { equal } from 'assert'
import {Board, emptyRow, calculateWinner} from './logic'

describe('calculateWinner()', () => {
    it('show work for a horizontal winner'), () => {
      const board: Board = [
        emptyRow,
        emptyRow,
        emptyRow,
        emptyRow,
        emptyRow,
        emptyRow,
        ['x', 'x', 'x', 'x', null, null]
      ];

      equal(calculateWinner(board), 'x');
    }
  }
)
