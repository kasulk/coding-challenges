export function SeriesSum(n: number): string {
  // set the first elements denominator to 1
  // loop n number of times, for each loop
  // add the quotient of 1 / denominator to a sum variable
  // increase the denominator by 3
  // after the loop, return sum variable as string with 2 decimal places

  let sum = 0;
  let denominator = 1;

  for (let i = 1; i <= n; i++) {
    sum += 1 / denominator;
    denominator += 3;
  }

  return sum.toFixed(2);
}
