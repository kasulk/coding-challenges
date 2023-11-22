export class Clock {
  private hours: number; //!
  private minutes: number; //!
  private timeHoursString: string; //!
  private timeMinutesString: string; //!
  private tempHours: number; //!

  constructor(hours = 0, minutes = 0) {
    this.hours = hours;
    this.minutes = minutes;
  }

  private _calcTimeHours(): number {
    this.tempHours = this.hours;
    if (this.hours < 0) this.tempHours = 24 + (this.hours % 24);

    return (this.tempHours + Math.trunc(this.minutes / 60)) % 24;
  }

  private _calcTimeMinutes(): number {
    return this.minutes % 60;
  }

  toString(): string {
    this.timeHoursString = this._calcTimeHours().toString().padStart(2, "0");
    this.timeMinutesString = this._calcTimeMinutes()
      .toString()
      .padStart(2, "0");

    return `${this.timeHoursString}:${this.timeMinutesString}`;
  }

  plus(minutes) {
    throw new Error("Implement me");
  }

  minus(minutes) {
    throw new Error("Implement me");
  }

  equals(otherClock) {
    throw new Error("Implement me");
  }
}

// const test = new Clock(-25,15)
// const test = new Clock(1,-40) // '00:20'
// console.log(test.toString())
// console.log(test)
