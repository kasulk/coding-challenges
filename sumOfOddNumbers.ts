export function rowSumOddNumbers(n: number): number {
  // find out pattern for first number in each row
  // loop n-1 times
  // for each iteration
  // add 2 to each element that is added up
  // add added up element to sum
  // after the loop, return sum

  const firstElementInRow: number = n + (n - 1) ** 2;
  let sum: number = firstElementInRow;
  let nextElement: number = firstElementInRow;

  for (let i = 0; i < n - 1; i++) {
    nextElement += 2;
    sum += nextElement;
  }

  return sum;
}
