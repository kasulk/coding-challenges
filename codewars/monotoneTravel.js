function isMonotone(nums) {
  return nums.every((num, i) => {
    const prev = nums[i - 1] || 0;
    return num >= prev;
  });
}
