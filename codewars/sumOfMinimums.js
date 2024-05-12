function sumOfMinimums(numArrs) {
  return numArrs.reduce((sum, nums) => sum + Math.min(...nums), 0);
}
