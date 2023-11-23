export class Clock {
  private hours: number; //!
  private minutes: number; //!
  // private hoursTemp: number; //!
  // private minsTemp: number; //!
  // private totalMins: number;
  // private timeHrs: number;
  // private timeMins: number;
  private clockMinutes: number;
  private clockHours: number;

  constructor(hours = 0, minutes = 0) {
    this.hours = hours;
    this.minutes = minutes;
  }

  private _calcTime(): void {
    // this.minsTemp = this.minutes; //!neu
    // if (this.minutes < 0) this.minsTemp = this.minutes % 60; //!neu

    // // this.hoursTemp = this.hours % 24;
    // this.hoursTemp = (this.hours % 24) + Math.trunc(this.minutes / 60); //!neu
    // if (this.hoursTemp < 0) this.hoursTemp += 24; //? bug? s. runjs

    // // this.totalMins = this.hoursTemp * 60 + this.minutes;
    // this.totalMins = this.hoursTemp * 60 + this.minsTemp; //!neu
    // this.timeMins = this.totalMins % 60;
    // this.timeHrs = Math.trunc(this.totalMins / 60) % 24;
    //// return this.time;

    console.log("input:", this.hours, this.minutes);
    // convert the hours into minutes (hours*60)
    // add/subtract the input minutes
    let totalTimeInMins = this.hours * 60 + this.minutes;
    // console.log(totalTimeInMins);
    // totalTimeInMins += mins;
    // console.log(totalTimeInMins);
    // divide the result by 60 to get the actual hours (before comma)
    let totalHours = Math.trunc(totalTimeInMins / 60);
    // console.log(totalHours);
    // apply modulo 60 to get the actual minutes
    this.clockMinutes = totalTimeInMins % 60;
    // console.log(this.clockMinutes);
    // if the mins are smaller 0, subtract them from 60 (and subtract 1 from the hours)
    if (this.clockMinutes < 0) {
      this.clockMinutes += 60;
      totalHours--;
    }
    // console.log(this.clockMinutes);
    //
    // apply modulo 24 to the hours
    this.clockHours = totalHours % 24;
    // console.log(this.clockHours);
    // if the resulting hours smaller 0, subtract them from 24
    if (this.clockHours < 0) this.clockHours += 24;
    // console.log(this.clockHours);

    // console.log(this.clockHours + ":" + this.clockMinutes);
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

//// apply modulo 60 to the minutes, to get the remainding minutes
//// divide the minutes by 60 to get the hours that have to be added/subracted to the input hours

// convert the hours into minutes (hours*60)
// add/subtract the input minutes
// divide the result by 60 to get the actual hours (before comma)
// apply modulo 60 to get the actual minutes
//
// apply modulo 24 to the hours
// if the resulting hours smaller 0, subtract the from 24

// function convertTime2(hrs, mins) {
//   console.log("input:", hrs, mins);
//   // convert the hours into minutes (hours*60)
//   // add/subtract the input minutes
//   let totalTimeInMins = hrs * 60 + mins;
//   console.log(totalTimeInMins);
//   // totalTimeInMins += mins;
//   // console.log(totalTimeInMins);
//   // divide the result by 60 to get the actual hours (before comma)
//   let totalHours = Math.trunc(totalTimeInMins / 60);
//   console.log(totalHours);
//   // apply modulo 60 to get the actual minutes
//   let clockMins = totalTimeInMins % 60;
//   console.log(clockMins);
//   // if the mins are smaller 0, subtract them from 60 (and subtract 1 from the hours)
//   if (clockMins < 0) {
//     clockMins += 60;
//     totalHours--;
//   }
//   console.log(clockMins);
//   //
//   // apply modulo 24 to the hours
//   let clockHours = totalHours % 24;
//   console.log(clockHours);
//   // if the resulting hours smaller 0, subtract the from 24
//   if (clockHours < 0) clockHours += 24;
//   console.log(clockHours);

//   console.log(clockHours + ":" + clockMins);
// }
// convertTime2(hrs,mins)
