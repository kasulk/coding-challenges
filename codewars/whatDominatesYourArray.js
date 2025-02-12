function dominator(nums) {
  const counts = {};
  const halfLen = nums.length / 2;

  for (const num of nums) {
    if (!counts[num]) counts[num] = 0;
    counts[num]++;

    if (counts[num] > halfLen) return num;
  }

  return -1;
}
