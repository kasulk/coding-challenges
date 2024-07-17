export class Pong {
  private maxScore: number;
  private currPlayer: number;
  private score: { [key: number]: number };
  readonly paddleHeight = 7;
  readonly ballHeight = 1;

  constructor(_maxScore: number) {
    this.maxScore = _maxScore;
    this.currPlayer = 2;
    this.score = {
      1: 0,
      2: 0,
    };
  }

  play(ballPos: number, playerPos: number): string {
    if (this.isOver()) return "Game Over!";
    this.switchPlayer();

    if (this.isHit(ballPos, playerPos)) {
      return `Player ${this.currPlayer} has hit the ball!`;
    }

    this.score[this.currPlayer]++;

    if (this.isOver()) {
      this.switchPlayer();
      return `Player ${this.currPlayer} has won the game!`;
    }

    return `Player ${this.currPlayer} has missed the ball!`;
  }

  private switchPlayer(): void {
    this.currPlayer = this.currPlayer === 1 ? 2 : 1;
  }

  private isHit(ballPos: number, playerPos: number): boolean {
    return (
      ballPos >= playerPos - this.paddleHeight / 2 &&
      ballPos <= playerPos + this.paddleHeight / 2
    );
  }

  private isOver(): boolean {
    return this.score[1] >= this.maxScore || this.score[2] >= this.maxScore;
  }
}
