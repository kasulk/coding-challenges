function maxDiff(nums) {
  return nums.length ? Math.max(...nums) - Math.min(...nums) : 0;
}
