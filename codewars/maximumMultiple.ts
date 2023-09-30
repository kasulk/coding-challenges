export function maxMultiple(divisor: number, bound: number): number {
  // create a largestDivisor variable
  // loop from 1 to bound
  // if iterator is divisible by divisor
  // overwrite the value in the variable with its value
  // after the loop, return value of the variable

  let largestDivisor = 0;

  for (let i = 1; i <= bound; i++) {
    if (i % divisor === 0) largestDivisor = i;
  }

  return largestDivisor;
}
