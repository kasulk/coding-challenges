export const listSquared = (start: number, end: number): number[][] => {
  // loop through all integers from m to n
  // for every number (i), loop through all integers from 1
  //// to number --> timeout, instead:
  //! until square root of the number (i)
  /// if the number is divisible by the divisor
  /// square the divisor and add it to a sum variable
  ///! if the divisor isn't the same as number/divisor,
  ///! add also (number/divisor) squared to the sum
  // after the inner loop, if the square root of the sum is an integer
  // add the number (i) and the sum as elements to an array
  // add this array to the output array
  // reset the sum variable
  // after the outer loop, return the output array

  const output: [number, number][] = [];
  let sum = 0;

  for (let i = start; i <= end; i++) {
    //// for (let divisor = 1; j <= i; j++) {     // --> timeout, instead:
    //!
    for (let divisor = 1; divisor <= Math.floor(Math.sqrt(i)); divisor++) {
      if (i % divisor === 0) {
        sum += divisor ** 2;

        //! if divisor is a divisor, add also i/divisor, unless they're the same
        if (divisor !== i / divisor) {
          sum += (i / divisor) ** 2; //!
        }
      }
    }

    if (Number.isInteger(Math.sqrt(sum))) {
      output.push([i, sum]);
    }
    sum = 0;
  }

  return output;
};
