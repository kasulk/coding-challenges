function sumAverage(numsArrs) {
  return Math.floor(
    numsArrs.reduce((sumAvgs, nums) => sumAvgs + average(nums), 0)
  );
}

function average(nums) {
  const sum = nums.reduce((sum, num) => sum + num, 0);
  return sum / nums.length;
}
