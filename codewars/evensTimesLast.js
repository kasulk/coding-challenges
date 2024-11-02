function evenLast(nums) {
  const last = nums.slice(-1)[0];
  return nums.reduce(
    (acc, curr, i) => (i % 2 === 0 ? acc + curr * last : acc),
    0
  );
}
