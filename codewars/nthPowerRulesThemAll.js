function modifiedSum(nums, n) {
  const poweredSum = nums.reduce((acc, curr) => acc + curr ** n, 0);
  const sum = nums.reduce((acc, curr) => acc + curr, 0);

  return poweredSum - sum;
}
