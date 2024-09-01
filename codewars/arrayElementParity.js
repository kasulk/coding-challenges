function solve(nums) {
  return [...new Set(nums)].reduce((sum, num) => sum + num, 0);
}
