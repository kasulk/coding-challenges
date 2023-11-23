export class Clock {
  private hours: number; //!
  private minutes: number; //!

  private clockMinutes: number; //!
  private clockHours: number; //!

  constructor(hours = 0, minutes = 0) {
    this.hours = hours;
    this.minutes = minutes;
  }

  private _calcTime(): void {
    // convert the input hours into minutes and add the input minutes
    let totalTimeInMins = this.hours * 60 + this.minutes;
    // divide the result by 60 to get the actual hours (before comma)
    let totalHours = Math.trunc(totalTimeInMins / 60);
    // apply modulo 60 to get the actual minutes
    this.clockMinutes = totalTimeInMins % 60;
    // if the mins are negative,
    // subtract them from 60 and subtract 1 from the hours
    if (this.clockMinutes < 0) {
      this.clockMinutes += 60;
      totalHours--;
    }
    // apply modulo 24 to the hours to get the hours on the clock
    this.clockHours = totalHours % 24;
    // if the resulting hours is negative, subtract them from 24
    if (this.clockHours < 0) this.clockHours += 24;
  }

  toString(): string {
    this._calcTime();
    return `${this.clockHours.toString().padStart(2, "0")}:${this.clockMinutes
      .toString()
      .padStart(2, "0")}`;
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
