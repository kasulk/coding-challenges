export function binaryArrayToNumber(arr: number[]): number {
  // e.g. 1101 = 1*2^3 + 1*2^2 + 0*2^1 + 1*2^0
  // reverse input array
  // loop through input array, for every element,
  // multiply it by 2 to the power of i
  // add it to a sum variable
  // after the loop, return the sum

  return arr.reverse().reduce((acc, curr, i) => (acc += curr * 2 ** i));
}
