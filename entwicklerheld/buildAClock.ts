export class Clock {
  private hours: number; //!
  private minutes: number; //!

  private totalTimeInMinutes: number; //!

  private clockHours: number; //!
  private clockMinutes: number; //!

  constructor(hours = 0, minutes = 0) {
    this.hours = hours;
    this.minutes = minutes;
    this._calcTime(this.hours, this.minutes);
  }

  private _calcTime(hours, minutes): void {
    // convert the input hours into minutes and add the input minutes
    this.totalTimeInMinutes = hours * 60 + minutes;
    // divide the result by 60 to get the actual hours (before comma)
    let totalHours = Math.trunc(this.totalTimeInMinutes / 60);
    // apply modulo 60 to get the clock minutes
    this.clockMinutes = this.totalTimeInMinutes % 60;
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

  private _clockValueToString(value: number): string {
    return value.toString().padStart(2, "0");
  }

  toString(): string {
    return (
      this._clockValueToString(this.clockHours) +
      ":" +
      this._clockValueToString(this.clockMinutes)
    );
  }

  plus(minutes: number): string {
    minutes += this.clockMinutes;
    this._calcTime(this.clockHours, minutes);
    return this.toString();
  }

  minus(minutes: number): string {
    minutes *= -1;
    return this.plus(minutes);
  }

  equals(otherClock) {
    throw new Error("Implement me");
  }
}

// let hrs = 1;
// let mins = 15;
// const test = new Clock(hrs, mins);
// console.log(test);
// console.log(test.toString());
// console.log(test);

// console.log(test.plus(1));
// console.log(test.toString());
