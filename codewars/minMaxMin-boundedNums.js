function minMinMax(nums) {
  const sortedNums = nums.sort((a, b) => a - b);
  const min = sortedNums[0];
  const max = sortedNums.slice(-1)[0];
  let minAbsent;
  console.log("sortedNums:", sortedNums);

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    const next = nums[i + 1];
    if (next !== curr && next !== curr + 1) {
      minAbsent = curr + 1;
      break;
    }
  }

  return [min, minAbsent, max];
}
