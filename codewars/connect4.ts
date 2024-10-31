export class Connect4 {
  currPlayer: 1 | 2 = 1;
  grid: number[][] = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ];
  isWon: boolean = false;

  constructor() {
    // Good luck
  }

  play(col: number): string {
    if (this.isWon) return "Game has finished!";
    if (this.grid[0][col]) return "Column full!";

    this.placeChip(col);

    const turnResult = this.isWon
      ? `Player ${this.currPlayer} wins!`
      : `Player ${this.currPlayer} has a turn`;
    //
    this.switchPlayer();
    // console.log(this.grid.map((row) => row.join("")).join("\n"), "\n");
    return turnResult;
  }

  placeChip(col: number): void {
    this.grid.reverse();
    for (let i = 0; i < this.grid.length; i++) {
      const currRow = this.grid[i];
      const currCell = currRow[col];
      if (!currCell) {
        // row[col] = this.currPlayer;
        this.grid[i][col] = this.currPlayer;
        // check win
        if (this.isFourInARow(currRow)) this.isWon = true;
        if (this.isFourInACol(col)) this.isWon = true;
        if (this.isFourInDiagonal(col, i)) this.isWon = true;
        break;
      }
    }

    // for (const row of this.grid.reverse()) {
    // let currCell = row[col];
    // if (!currCell) {
    //   row[col] = this.currPlayer;
    //   // check win
    //   if (this.isFourInARow(row)) this.isWon = true;
    //   if (this.isFourInACol(col)) this.isWon = true;
    //   if (this.isFourInDiagonal(col, row)) this.isWon = true;
    //   break;
    // }
    // }
    this.grid.reverse();
  }

  isFourInARow(row: number[]): boolean {
    // const fourOfCurrPlayer = this.currPlayer.toString().repeat(4);
    const fourOfCurrPlayer = this.currPlayer === 1 ? "1111" : "2222";
    return row.join("").includes(fourOfCurrPlayer);
  }

  isFourInACol(col: number): boolean {
    const colCells = this.grid.map((row) => row[col]);
    return this.isFourInARow(colCells);
  }

  // todo:
  isFourInDiagonal(col: number, row: number): boolean {
    const lastRow = this.grid.length - 1; //5
    const distCurrRowToLast = lastRow - row;
    let startCol = col - distCurrRowToLast;
    let result: number[] = [];

    // bottom-left to top-right
    for (let row = lastRow, col = startCol; row > 0; row--, col++) {
      const currCell = this.grid[row][col];
      // if (!currCell) continue;
      result.push(currCell);
      // startCol++;
    }
    if (this.isFourInARow(result)) return true;
    result = [];

    // top-left to bottom-right
    startCol = col - row;
    for (let row = 0, col = startCol; row <= lastRow; row++, col++) {
      const currCell = this.grid[row][col];
      // if (!currCell) continue;
      result.push(currCell);
      // startCol++;
    }
    if (this.isFourInARow(result)) return true;
    return false;
  }

  switchPlayer(): void {
    this.currPlayer = this.currPlayer === 1 ? 2 : 1;
  }
}
// const grid: number[][] = [
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 1, 2, 0, 0],
//   [0, 0, 1, 1, 2, 0, 0],
//   [0, 1, 2, 2, 2, 1, 0],
// ];

const game = new Connect4();

// 4 in diagonal
game.play(1); // 1
game.play(2); // 2
game.play(2); // 1
game.play(3); // 2
game.play(3); // 1
game.play(4); // 2
game.play(3); // 1

game.play(4); // 2
game.play(5); // 1
game.play(4); // 2
game.play(4); // 1

game.play(0); // 2

// 4 in a col
// game.play(1);
// game.play(2);
// game.play(1);
// game.play(2);
// game.play(1);
// game.play(2);
// game.play(1);
// game.play(2);

// 4 in a row
// game.play(1);
// game.play(1);
// game.play(2);
// game.play(2);
// game.play(3);
// game.play(3);
// game.play(4);
// game.play(4);
