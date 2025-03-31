function solve(nums) {
  return nums
    .reverse()
    .reduce((acc, curr, i, arr) => {
      const prev = arr[i - 1];
      const last = acc[acc.length - 1];
      if (!i) return [curr];
      if (curr > prev && curr > last) return [...acc, curr];
      return acc;
    }, [])
    .reverse();
}
