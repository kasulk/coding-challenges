function missingNo(nums) {
  const sumNums = nums.reduce((sum, num) => sum + num, 0);
  const sumZeroToHundred = (100 * 101) / 2;
  return sumZeroToHundred - sumNums;
}
