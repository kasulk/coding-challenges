export function minimumSteps(nums: number[], value: number): number {
  const sortedNums = [...nums].sort((a, b) => a - b);

  let minSum = sortedNums[0];
  let numSteps = 0;

  while (minSum < value) {
    numSteps++;
    minSum += sortedNums[numSteps];
  }

  return numSteps;
}
