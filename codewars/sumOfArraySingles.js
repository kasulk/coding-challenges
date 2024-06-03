function repeats(nums) {
  let sum = 0;
  const sortedNums = nums.sort((a, b) => a - b);

  return sortedNums.reduce((sum, num, i) => {
    const last = sortedNums[i - 1] || 0;
    if (num === last) return sum - num;
    return sum + num;
  });
}
