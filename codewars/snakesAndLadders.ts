export class SnakesLadders {
  playerPostions: { [key: number]: number } = { 1: 0, 2: 0 };
  currPlayer: number = 1;
  isGameOver: boolean = false;

  ladders: { [key: number]: number } = {
    2: 38,
    7: 14,
    8: 31,
    15: 26,
    21: 42,
    28: 84,
    36: 44,
    51: 67,
    71: 91,
    78: 98,
    87: 94,
  };

  snakes: { [key: number]: number } = {
    16: 6,
    46: 25,
    49: 11,
    62: 19,
    64: 60,
    74: 53,
    89: 68,
    92: 88,
    95: 75,
    99: 80,
  };

  play(die1: number, die2: number): string {
    if (this.isGameOver) return "Game over!";

    const diceSum = die1 + die2;
    const isDouble = die1 === die2;

    const currPlayerPos = this.playerPostions[this.currPlayer];
    const newPosition = this.calcNewPosition(currPlayerPos, diceSum);

    this.playerPostions[this.currPlayer] = newPosition;

    if (newPosition === 100) {
      this.isGameOver = true;
      return `Player ${this.currPlayer} Wins!`;
    }

    const output = `Player ${this.currPlayer} is on square ${newPosition}`;
    if (!isDouble) this.switchPlayer();

    return output;
  }

  private calcNewPosition(oldPosition: number, diceSum: number): number {
    let newPosition = oldPosition + diceSum;

    if (newPosition > 100) {
      const numStepsOver100 = newPosition - 100;
      newPosition = 100 - numStepsOver100;
    }

    return this.ladders[newPosition] || this.snakes[newPosition] || newPosition;
  }

  private switchPlayer(): void {
    this.currPlayer = this.currPlayer === 1 ? 2 : 1;
  }
}
