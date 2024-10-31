export class Connect4 {
  grid: number[][] = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ];
  currPlayer: 1 | 2 = 1;
  isWon: boolean = false;

  play(col: number): string {
    if (this.isWon) return "Game has finished!";
    if (this.grid[0][col]) return "Column full!";

    this.placeChip(col);

    const turn = this.isWon
      ? `Player ${this.currPlayer} wins!`
      : `Player ${this.currPlayer} has a turn`;

    this.switchPlayer();

    return turn;
  }

  placeChip(col: number): void {
    this.grid.reverse();

    for (let rowNum = 0; rowNum < this.grid.length; rowNum++) {
      const currRow = this.grid[rowNum];
      const currCell = currRow[col];
      if (!currCell) {
        this.grid[rowNum][col] = this.currPlayer;
        this.setIsWon(currRow, col, rowNum);
        break;
      }
    }

    this.grid.reverse();
  }

  setIsWon(cells: number[], col: number, row: number): void {
    if (this.isFourInARow(cells)) this.isWon = true;
    if (this.isFourInACol(col)) this.isWon = true;
    if (this.isFourInDiagonal(col, row)) this.isWon = true;
  }

  isFourInARow(row: number[]): boolean {
    const fourOfCurrPlayer = this.currPlayer === 1 ? "1111" : "2222";
    return row.join("").includes(fourOfCurrPlayer);
  }

  isFourInACol(col: number): boolean {
    const colCells = this.grid.map((row) => row[col]);
    return this.isFourInARow(colCells);
  }

  isFourInDiagonal(col: number, row: number): boolean {
    const lastRow = this.grid.length - 1;
    const distCurrRowToLast = lastRow - row;

    const bottomLeftToTopRight = this.getBottomLeftToTopRight(
      col - distCurrRowToLast,
      lastRow
    );

    const topLeftToBottomRight = this.getTopLeftToBottomRight(
      col - row,
      lastRow
    );

    return (
      this.isFourInARow(bottomLeftToTopRight) ||
      this.isFourInARow(topLeftToBottomRight)
    );
  }

  getBottomLeftToTopRight(startCol: number, lastRow: number): number[] {
    const result: number[] = [];
    let col = startCol;

    for (let row = lastRow; row > 0; row--) {
      const currCell = this.grid[row][col] ?? 0;
      result.push(currCell);
      col++;
    }
    return result;
  }

  getTopLeftToBottomRight(startCol: number, lastRow: number): number[] {
    const result: number[] = [];
    let col = startCol;

    for (let row = 0; row <= lastRow; row++) {
      const currCell = this.grid[row][col] ?? 0;
      result.push(currCell);
      col++;
    }
    return result;
  }

  switchPlayer(): void {
    this.currPlayer = this.currPlayer === 1 ? 2 : 1;
  }
}
