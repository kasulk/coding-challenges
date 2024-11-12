function isDivisible(...nums) {
  return nums.slice(1).every((num) => nums[0] % num === 0);
}
