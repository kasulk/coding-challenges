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

  // Both clocks should be equal when the hours and the minutes are the same.
  // Given are two clocks that are initialized with new Clock(15, 37). When the equals is called on the first one with the other as parameter the result should be true
  //? clock1.equals(clock2)
  equals(otherClock): boolean {
    return (
      this.clockHours === otherClock.clockHours &&
      this.clockMinutes === otherClock.clockMinutes
    );
  }
}

// let hrs = 1;
// let mins = 15;
// const bla = new Clock(hrs, mins);
// console.log(bla);
// console.log(bla.toString());
// console.log(bla);

// console.log(bla.plus(1));
// console.log(bla.toString());

// const blub = new Clock(1, 16);
// console.log(blub);
// bla.equals(blub);
