export function sumPairs(nums: number[], sum: number): [number, number] | void {
  const halfSum = sum / 2;
  let restNums = nums;

  if (sum % 2 === 0) {
    restNums = removeFirstOccurenceOfHalfSum(restNums, halfSum);
  }

  const uniqueNums = [...new Set(restNums)];
  const diffs: number[] = [];

  for (const num of uniqueNums) {
    const currDiff = sum - num;

    if (num === halfSum || diffs.includes(num)) return [currDiff, num];

    diffs.push(currDiff);
  }
}

function removeFirstOccurenceOfHalfSum(
  inputNums: number[],
  halfSum: number
): number[] {
  const nums = [...inputNums];
  nums.splice(inputNums.indexOf(halfSum), 1);
  return nums;
}
