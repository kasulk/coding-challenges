export function getSum(a: number, b: number): number {
  // create a classic for loop
  // loop through all integers starting from min to max
  // add the value of each number to a sum variable

  let sum = 0;

  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    sum += i;
  }

  return sum;
}
