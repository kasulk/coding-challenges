export class Challenge {
  static solution(number: number) {
    // check if number is negative, if so, return 0
    // loop through all numbers between 0 and number
    // if it is dividable by 3 or 5 (without rest),
    // increase the sum by its value

    if (number < 0) return 0;

    let total = 0;

    for (let i = 1; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        total += i;
      }
    }
    return total;
  }
}
