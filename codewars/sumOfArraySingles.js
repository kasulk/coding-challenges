function repeats(nums) {
  return nums
    .sort((a, b) => a - b)
    .reduce((sum, curr, i, arr) =>
      curr === arr[i - 1] ? sum - curr : sum + curr
    );
}
