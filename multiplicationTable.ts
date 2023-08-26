export function multiplicationTable(size: number): number[][] {
  // create an output array of arrays and an inner array
  // create an outer for loop, loop i = size times
  // create an inner for loop
  /// for every round, add j to a temp array and increase j by i
  // after the inner loop, push the temp array to the outer array
  // reset the temp array
  // after the outer loop, return the output array

  const output: number[][] = [];
  let inner: number[] = [];

  for (let i = 1; i <= size; i++) {
    for (let j = i; j <= size * i; j += i) {
      inner.push(j);
    }
    output.push(inner);
    inner = [];
  }

  return output;
}
