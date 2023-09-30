export function evenNumbers(array: number[], n: number): number[] {
  // loop through input array, for each element
  // if its even, add it to the output array
  // return the last n elements of the output array

  return array.filter((number) => number % 2 === 0).slice(-n);
}
