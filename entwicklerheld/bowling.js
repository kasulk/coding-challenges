//
export class Bowling {
  constructor() {
    this.result = 0;
    this.frameNum = 1;
    this.isFirstThrow = true;
    this.frameSum = 0;

    this.countNextPoints = 0;
    this.countPointsAfterNext = 0;
  }

  /**
   * is called each time the player rolls a ball. The argument is the number of pins knocked down.
   */
  roll(pins) {
    console.log(
      `Frame ${this.frameNum}: ${pins}; ${this.countNextPoints}, ${this.countPointsAfterNext}, ${this.result}`
    );

    if (this.countNextPoints) {
      this.result += pins * this.countNextPoints;
      this.countNextPoints = 0;
    }
    if (this.countPointsAfterNext) {
      this.countPointsAfterNext = 0;
      this.countNextPoints++;
    }

    if (pins === 10) {
      if (this.frameNum < 11) {
        this.result += pins;
        this.countNextPoints++;
        this.countPointsAfterNext++;
      }
      this.frameNum++;
    }

    if (this.frameNum < 11) {
      if (this.isFirstThrow && pins !== 10) {
        this.frameSum += pins;
        this.isFirstThrow = false;
      } else if (!this.isFirstThrow) {
        this.frameSum += pins;
        this.isFirstThrow = true;

        if (this.frameSum === 10 && this.frameNum < 11) {
          this.countNextPoints++;
        }
        this.result += this.frameSum;
        this.frameSum = 0;
        this.frameNum++;
      }
    }
  }

  /**
   * is called only at the very end of the game. It returns the total score for that game.
   */
  score() {
    console.log("-------------", this.result);
    return this.result;
  }
}
