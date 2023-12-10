export function divisions(n: number, divisor: number): number {
  // as long as the number is greater than or equal to the divisor
  // divide it by the divisor and truncate it
  // increase a counter by 1
  // after the loop, return the value of the counter

  let num = n;
  let numDivs = 0;

  while (num >= divisor) {
    num = Math.trunc(num / divisor);
    numDivs++;
  }

  return numDivs;
}
