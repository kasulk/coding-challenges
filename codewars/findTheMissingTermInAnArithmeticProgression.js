function findMissing(nums) {
  const range = nums.slice(-1) - nums[0];
  const step = range / nums.length;

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    const next = nums[i + 1];

    if (next !== curr + step) return curr + step;
  }
}
