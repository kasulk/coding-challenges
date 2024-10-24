function modifiedSum(nums, n) {
  return nums.reduce((sum, num) => sum + num ** n - num, 0);
}
