export class Kata {
  static squareDigits(num: number): number {
    // turn number into array of digits
    // for every digit, square it
    // concatenate the array elements
    // return it as number

    return Number(
      num
        .toString()
        .split("")
        .map((digit) => Number(digit) ** 2)
        .join("")
    );
  }
}
