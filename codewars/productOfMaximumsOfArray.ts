export function maxProduct(numbers: number[], size: number): number {
  // loop through the sorted input array (size times)
  // multiply all numbers with index < size - 1
  // after the loop, return the product

  return numbers
    .sort((a, b) => b - a)
    .reduce((acc, curr, i) => (i <= size - 1 ? acc * curr : acc));
}
