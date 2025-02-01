function consecutive(nums, a, b) {
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    const next = nums[i + 1];
    if ((curr === a && next === b) || (curr === b && next === a)) {
      return true;
    }
  }
  return false;
}
