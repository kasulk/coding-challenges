function consecutive(nums) {
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  const len = nums.length;

  return len ? max - min + 1 - len : 0;
}
