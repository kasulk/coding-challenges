function pairs(nums) {
  return nums.reduce((acc, curr, i) => {
    const next = nums[i + 1];
    return i % 2 === 0 && Math.abs(curr - next) === 1 ? ++acc : acc;
  }, 0);
}
