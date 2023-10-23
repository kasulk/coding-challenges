export function sumTriangularNumbers(num: number): number {
  // if num > 0, create an array with num+1 number of elements
  // for each element,
  // calculate its triangular number (from its index)
  // and add it to a sum

  return num > 0
    ? Array(num + 1)
        .fill("x")
        .reduce((sum, _, index) => sum + (index * (index + 1)) / 2, 0)
    : 0;
}
