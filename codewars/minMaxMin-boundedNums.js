function minMinMax(nums) {
  const sortedNums = nums.sort((a, b) => a - b);
  const min = Math.min(...nums);
  const max = Math.max(...nums);

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    const next = nums[i + 1];
    if (next !== curr && next !== curr + 1) return [min, curr + 1, max];
  }
}
