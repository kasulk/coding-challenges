function sumOfMinimums(numsArr) {
  return numsArr
    .map((nums) => Math.min(...nums))
    .reduce((sum, num) => sum + num);
}
