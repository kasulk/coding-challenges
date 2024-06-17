function highestRank(arr) {
  let numsCount = {};

  arr.forEach((num) => {
    if (!numsCount[num]) numsCount[num] = 0;
    numsCount[num]++;
  });

  const numCounts = Object.entries(numsCount).sort((a, b) => b[1] - a[1]);
  const maxCount = numCounts[0][1];

  const maxNums = numCounts
    .filter(([_, count]) => count === maxCount)
    .sort((a, b) => b[0] - a[0]);

  const maxNum = maxNums[0][0];

  return Number(maxNum);
}
