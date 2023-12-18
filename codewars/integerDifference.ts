export const intDiff = (nums: number[], n: number): number => {
  return nums
    .map((currNum, i) => {
      const restOfNums = nums.slice(i + 1);
      return restOfNums.filter((restNum) => Math.abs(restNum - currNum) === n)
        .length;
    })
    .reduce((sum, numTwos) => sum + numTwos, 0);
};
