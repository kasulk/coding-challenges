function sumTwoSmallestNumbers(nums) {
  return nums
    .sort((a, b) => a - b)
    .reduce((sum, curr, i) => (i <= 1 ? sum + curr : sum));
}
