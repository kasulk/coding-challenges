function deleteNth(nums, n) {
  const numCounts = {};

  return nums
    .map((num) => {
      if (!numCounts[num]) numCounts[num] = 0;
      numCounts[num]++;

      if (numCounts[num] > n) return null;
      return num;
    })
    .filter((num) => num !== null);
}
