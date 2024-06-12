function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const indexSecond = nums.lastIndexOf(target - nums[i]);
    if (indexSecond >= 0) return [i, indexSecond];
  }

  return [];
}
