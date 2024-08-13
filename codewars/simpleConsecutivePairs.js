function pairs(nums) {
  return nums.reduce((acc, curr, i) => {
    if (i % 2 !== 0) return acc;
    const next = nums[i + 1];
    if (Math.abs(curr - next) === 1) return acc + 1;
    return acc;
  }, 0);
}
