import 'mocha'
import { expect } from 'chai'
import { calculateWinner } from './logic'
import { Board, emptyRow } from './logic'

describe('calculateWinner()', () => {
    it('should return x for four horizontal xs', () => {
      const board: Board = [
        emptyRow,
        emptyRow,
        emptyRow,
        emptyRow,
        emptyRow,
        emptyRow,
        [null, 'x', 'x', 'x', 'x', null]
      ];

      expect(calculateWinner(board)).to.equal('x');
    })

    it('should return null for three horizontal xs and one o', () => {
      const board: Board = [
        emptyRow,
        emptyRow,
        emptyRow,
        emptyRow,
        emptyRow,
        emptyRow,
        [null, 'x', 'o', 'x', 'x', null]
      ];

      expect(calculateWinner(board)).to.equal(null);
    })

    it('should return null for three horizontal xs and one o', () => {
      const board: Board = [
        emptyRow,
        emptyRow,
        emptyRow,
        emptyRow,
        emptyRow,
        emptyRow,
        [null, 'o', 'o', 'o', 'o', null]
      ];

      expect(calculateWinner(board)).to.equal('o');
    })
})
