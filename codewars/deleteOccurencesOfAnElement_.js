function deleteNth(nums, n) {
  const occurences = {};

  return nums
    .map((num) => {
      if (!occurences[num]) occurences[num] = 0;
      occurences[num]++;

      if (occurences[num] > n) return null;
      return num;
    })
    .filter((num) => num != null);
}
