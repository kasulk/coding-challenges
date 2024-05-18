function inAscOrder(nums) {
  return [...nums].sort((a, b) => a - b).every((num, i) => num === nums[i]);
}
