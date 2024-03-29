function removeSmallest(nums) {
  const min = Math.min(...nums);
  const firstMin = nums.indexOf(min);

  return nums.filter((_, i) => i !== firstMin);
}
