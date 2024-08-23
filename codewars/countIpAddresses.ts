export function ipsBetween(start: string, end: string): number {
  const startNums = start.split(".").map(Number);
  const endNums = end.split(".").map(Number);

  const differences = startNums.map((startNum, i) => {
    return endNums[i] - startNum;
  });

  const result = differences.reverse().reduce((acc, curr, i) => {
    return acc + curr * 256 ** i;
  }, 0);

  return result;
}
