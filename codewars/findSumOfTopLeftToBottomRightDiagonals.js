function diagonalSum(numsArrs) {
  return numsArrs.reduce((sum, currNums, i) => sum + currNums[i], 0);
}
