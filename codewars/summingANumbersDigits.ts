export function sumDigits(n: number): number {
  // convert absolute value of the input number into string,
  // then into an array of numbers
  // reduce the digits to a sum and return it

  return Math.abs(n)
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, curr) => acc + curr);
}
