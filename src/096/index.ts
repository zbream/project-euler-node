import { join } from 'path';
import { getInputSudokuBoards } from './input/input-sudoku';

export function main096() {
  const inputPath = join(__dirname, 'input/sudoku.txt');
  const inputBoards = getInputSudokuBoards(inputPath);
  return sudokuSolveAndSumTopLeft(inputBoards);
}

function sudokuSolveAndSumTopLeft(boards: number[][]): number {
  return boards.reduce((sum, board) => {
    const solution = new SudokuSolver().applyBoard(board).solve();
    if (!solution) {
      throw new Error('unsolvable');
    }
    return sum + Number(solution.slice(0, 3).join(''));
  }, 0);
}

class SudokuSolver {
  private board: number[];
  private candidates: boolean[];

  constructor() {
    this.board = new Array(81).fill(0);
    this.candidates = new Array(81 * 9).fill(true);
  }

  clone(): SudokuSolver {
    const solver = new SudokuSolver();
    solver.board = [...this.board];
    solver.candidates = [...this.candidates];
    return solver;
  }

  applyBoard(board: number[]): SudokuSolver {
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        const value = board[this.toBoardIndex(r, c)];
        if (value > 0) {
          this.applyValue(r, c, value);
        }
      }
    }
    return this;
  }

  applyValue(row: number, col: number, value: number): SudokuSolver {
    this.board[this.toBoardIndex(row, col)] = value;

    // update candidates along row
    for (let c = 0; c < 9; c++) {
      const index = this.toCandidateIndex(row, c, value);
      this.candidates[index] = false;
    }

    // update candidates along column
    for (let r = 0; r < 9; r++) {
      const index = this.toCandidateIndex(r, col, value);
      this.candidates[index] = false;
    }

    // update candidates within square
    const squareRow = Math.floor(row / 3);
    const squareCol = Math.floor(col / 3);
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        const index = this.toCandidateIndex(
          squareRow * 3 + r,
          squareCol * 3 + c,
          value
        );
        this.candidates[index] = false;
      }
    }

    return this;
  }

  solve(): number[] | undefined {
    // First attempt: single-candidates
    // - Loop through the cells, fill in any cells with only one possible candidate.
    // - If an unset cell has no candidates, abort; there is no solution.
    // - If all values are set in a pass, we have found the solution.
    // - If no new values are set in a pass, we are stuck. Move on to brute-force.
    let isSolved = false;
    let isStuck = false;
    while (!isSolved && !isStuck) {
      isSolved = true;
      isStuck = true;
      for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
          if (this.board[this.toBoardIndex(r, c)] > 0) {
            continue;
          }
          isSolved = false;
          const candidates = this.findCandidates(r, c);
          if (candidates.length === 0) {
            // No solution!
            return undefined;
          }
          if (candidates.length === 1) {
            this.applyValue(r, c, candidates[0]);
            isStuck = false;
          }
        }
      }
    }
    if (isSolved) {
      return this.board;
    }

    // Final attempt: brute-force
    // - We've filled in as much as we can, now we are left with cells of multiple candidates.
    // - Loop through the cells until we find the first unset one with multiple candidates.
    // - Run `solve` one-by-one with each candidate set.
    // - - If we find a solution, return it.
    // - - If no candidates work, the board is unsolvable. We are likely within a brute-force attempt whose candidate was invalid.
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (this.board[this.toBoardIndex(r, c)] > 0) {
          continue;
        }
        for (const candidate of this.findCandidates(r, c)) {
          const result = this.clone().applyValue(r, c, candidate).solve();
          if (result !== undefined) {
            return result;
          }
        }
        return undefined;
      }
    }

    // Technically unreachable, but whatever.
    return undefined;
  }

  private findCandidates(row: number, col: number): number[] {
    const result: number[] = [];
    for (let v = 1; v <= 9; v++) {
      if (this.candidates[this.toCandidateIndex(row, col, v)]) {
        result.push(v);
      }
    }
    return result;
  }

  private toBoardIndex(row: number, col: number): number {
    return row * 9 + col;
  }

  private toCandidateIndex(row: number, col: number, value = 1): number {
    return this.toBoardIndex(row, col) * 9 + (value - 1);
  }

  private debugBoard() {
    for (let r = 0; r < 9; r++) {
      const index = this.toBoardIndex(r, 0);
      console.log(this.board.slice(index, index + 9).join(''));
    }
  }
}
