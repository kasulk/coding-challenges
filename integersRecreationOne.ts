export const listSquared = (m: number, n: number): number[][] => {
  // loop through all integers from m to n
  // for every number, loop through all integers from 1 to number
  /// if the number is divisible by the integer
  /// square the integer and add it to a sum variable
  // after the inner loop, if the square root of the sum is an integer
  // add the number and the sum as elements to an array
  // add this array to the output array
  // reset the sum variable
  // after the outer loop, return the output array

  //? inner loop only once

  console.log(m, n);

  const output: [number, number][] = [];
  let sum = 0;

  for (let i = m; i <= n; i++) {
    // console.log("------------");
    // console.log(i);

    for (let j = 1; j <= i; j++) {
      //   console.log("j:", j, i % j === 0);

      if (i % j === 0) {
        sum += j * j;
        // console.log("sum:", sum);
      }
    }

    // console.log(Number.isInteger(Math.sqrt(sum)));

    if (Number.isInteger(Math.sqrt(sum))) {
      output.push([i, sum]);
    }
    sum = 0;
  }
  return output;
};
