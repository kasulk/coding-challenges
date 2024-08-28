export function sumPairs(ints: number[], sum: number): [number, number] | void {
  let restInts = ints;
  const half = sum / 2;

  if (sum % 2 === 0) {
    restInts = removeFirstHalf(restInts, half);
  }

  const restSet = new Set(restInts);
  const diffs: number[] = [];

  for (const num of restSet.values()) {
    const currDiff = sum - num;

    if (num === half || diffs.includes(num)) return [currDiff, num];

    diffs.push(currDiff);
  }
}

function removeFirstHalf(nums: number[], half: number): number[] {
  const newNums = [...nums];
  newNums.splice(nums.indexOf(half), 1);
  return newNums;
}
