export class Bowling {
  constructor() {
    this.frameNum = 1;
    this.frameSum = 0;
    this.isFirstThrow = true;
    this.totalScore = 0;

    this.countNextPoints = 0;
    this.countPointsAfterNext = 0;
  }

  /**
   * is called each time the player rolls a ball. The argument is the number of pins knocked down.
   */
  roll(pins) {
    // add points qualified for with previous frames
    if (this.countNextPoints) {
      this.totalScore += pins * this.countNextPoints;
      this.countNextPoints = 0;
    }
    if (this.countPointsAfterNext) {
      this.countPointsAfterNext--;
      this.countNextPoints++;
    }

    // process current frame
    if (this.frameNum < 11) {
      //
      if (pins === 10) {
        this.totalScore += pins;
        this.countNextPoints++;
        this.countPointsAfterNext++;
        this.frameNum++;
      }

      if (pins < 10) {
        if (this.isFirstThrow) {
          this.frameSum += pins;
          this.isFirstThrow = false;
          //
        } else if (!this.isFirstThrow) {
          this.frameSum += pins;
          this.isFirstThrow = true;

          if (this.frameSum === 10) this.countNextPoints++;

          this.totalScore += this.frameSum;
          this.frameSum = 0;
          this.frameNum++;
        }
      }
    }
  }

  /**
   * is called only at the very end of the game. It returns the total score for that game.
   */
  score() {
    return this.totalScore;
  }
}
