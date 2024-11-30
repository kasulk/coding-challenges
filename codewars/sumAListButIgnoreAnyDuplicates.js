function sumNoDuplicates(nums) {
  return nums
    .sort((a, b) => a - b)
    .reduce((sum, curr, i, arr) => {
      const prev = arr[i - 1];
      const next = arr[i + 1];
      return curr === prev || curr === next ? sum : sum + curr;
    }, 0);
}
