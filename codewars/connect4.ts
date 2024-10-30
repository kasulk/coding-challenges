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
    for (const row of this.grid.reverse()) {
      let currCell = row[col];
      if (!currCell) {
        row[col] = this.currPlayer;
        // check win
        if (this.isFourInARow(row)) this.isWon = true;
        if (this.isFourInACol(col)) this.isWon = true;
        break;
      }
    }
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
  //   isFourInDiagonal(): boolean {}

  switchPlayer(): void {
    this.currPlayer = this.currPlayer === 1 ? 2 : 1;
  }
}

// const game = new Connect4();

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
