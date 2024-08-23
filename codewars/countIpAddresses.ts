export function ipsBetween(start: string, end: string): number {
  const startNums = start.split(".").map(Number);
  const endNums = end.split(".").map(Number);

  return startNums
    .map((startNum, i) => endNums[i] - startNum)
    .reverse()
    .reduce((accSum, currNum, i) => accSum + currNum * 256 ** i, 0);
}
