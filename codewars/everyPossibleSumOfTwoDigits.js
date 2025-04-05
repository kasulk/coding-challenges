function digits(num) {
  return num
    .toString()
    .split("")
    .map(Number)
    .reduce((sums, curr, i, nums) => {
      const restNums = nums.slice(i + 1);
      const currSums = restNums.map((num) => curr + num);
      return [...sums, ...currSums];
    }, []);
}
