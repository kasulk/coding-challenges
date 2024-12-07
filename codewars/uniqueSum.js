function uniqueSum(nums) {
  return nums.length
    ? [...new Set(nums)].reduce((sum, num) => sum + num, 0)
    : null;
}
