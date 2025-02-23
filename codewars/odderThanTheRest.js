function oddOne(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2) return i;
  }
  return -1;
}
