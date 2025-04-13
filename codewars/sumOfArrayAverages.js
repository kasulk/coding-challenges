function sumAverage(numsArrs) {
  const sumAverages = numsArrs.reduce(
    (sum, currNums) => sum + average(currNums),
    0
  );
  return Math.floor(sumAverages);
}

function average(nums) {
  const sum = nums.reduce((sum, num) => sum + num, 0);
  return sum / nums.length;
}
