export function sumCubes(n: number): number {
  // create an array with n elements
  // reassign the values of the elements with the numbers 1 to n
  // sum all the cubes of the elements values and return the result

  return Array(n)
    .fill("x")
    .map((_, i) => i + 1)
    .reduce((acc, curr) => acc + curr ** 3);
}
