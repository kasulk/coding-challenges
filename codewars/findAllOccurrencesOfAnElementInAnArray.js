function findAll(nums, n) {
  return nums.reduce((acc, curr, i) => (curr === n ? [...acc, i] : acc), []);
}
