export class Clock {
  private hours: number;
  private minutes: number;

  private clockHours: number;
  private clockMinutes: number;

  constructor(hours = 0, minutes = 0) {
    this.hours = hours;
    this.minutes = minutes;
    this._calcTime(this.hours, this.minutes);
  }

  private _calcTime(hours, minutes): void {
    // get the actual hours including minutes (before comma)
    const totalTimeInMinutes = hours * 60 + minutes;
    let totalHours = Math.trunc(totalTimeInMinutes / 60);

    this.clockMinutes = totalTimeInMinutes % 60;

    // handle negative minutes
    if (this.clockMinutes < 0) {
      this.clockMinutes += 60;
      totalHours--;
    }

    this.clockHours = totalHours % 24;

    // handle negative hours
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

  equals(otherClock): boolean {
    return (
      this.clockHours === otherClock.clockHours &&
      this.clockMinutes === otherClock.clockMinutes
    );
  }
}
