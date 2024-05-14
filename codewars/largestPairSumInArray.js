function largestPairSum(nums) {
  return [...nums]
    .sort((a, b) => a - b)
    .slice(-2)
    .reduce((sum, num) => sum + num, 0);
}
