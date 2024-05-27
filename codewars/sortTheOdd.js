function sortArray(nums) {
  const oddNums = nums.filter((num) => num % 2 !== 0).sort((a, b) => a - b);

  return nums.map((num) => (num % 2 === 0 ? num : oddNums.shift()));
}
