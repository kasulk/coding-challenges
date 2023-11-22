export class Clock {
  private hours: number; //!
  private minutes: number; //!
  // private timeHoursString: string; //!
  // private timeMinutesString: string; //!
  private hoursTemp: number; //!
  private minsTemp: number; //!

  private totalMins: number;
  private timeHrs: number;
  private timeMins: number;

  constructor(hours = 0, minutes = 0) {
    this.hours = hours;
    this.minutes = minutes;
  }

  private _calcTime(): void {
    this.minsTemp = this.minutes; //!neu
    if (this.minutes < 0) this.minsTemp = this.minutes % 60; //!neu

    // this.hoursTemp = this.hours % 24;
    this.hoursTemp = (this.hours % 24) + Math.trunc(this.minutes / 60); //!neu
    if (this.hoursTemp < 0) this.hoursTemp += 24;

    // this.totalMins = this.hoursTemp * 60 + this.minutes;
    this.totalMins = this.hoursTemp * 60 + this.minsTemp; //!neu
    this.timeMins = this.totalMins % 60;
    this.timeHrs = Math.trunc(this.totalMins / 60) % 24;

    // return this.time;
  }

  toString(): string {
    this._calcTime();
    return `${this.timeHrs.toString().padStart(2, "0")}:${this.timeMins
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

//
//! const test = new Clock(1, 60) // 02:00 (icke: 03:00)
//// const test = new Clock(0,1723) // 04:43 (icke: 28:43)
//// const test = new Clock(-25,15) // 23:15
//// const test = new Clock(1,-40) // '00:20'
//// const test = new Clock(-1,-40) // '22:20'
//// const test = new Clock(1,-160) // '22:20' (icke: -1:-40)
// console.log(test.toString())
// console.log(test)

// let hrs = 0
// let mins = 0
// // hrs = -25
// // mins = 15
// hrs = 1
// mins = -160

// function convertTime(hrs, mins) {
//   let hoursTemp = hrs % 24

//   if (hoursTemp < 0) hoursTemp += 24

//   const totalMins = hoursTemp * 60 + mins
//   const timeMins = totalMins % 60
//   const timeHrs = Math.trunc(totalMins/60)

//   return `${timeHrs%24}:${timeMins}`
// }

// convertTime(hrs, mins)
