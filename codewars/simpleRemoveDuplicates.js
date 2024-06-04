function solve(nums) {
  return nums.filter((num, i) => !nums.slice(i + 1, nums.length).includes(num));
}
