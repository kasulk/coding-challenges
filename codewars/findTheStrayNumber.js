function stray(nums) {
  const sortedNums = [...nums.sort()];

  const [first, second] = sortedNums;
  const last = sortedNums[nums.length - 1];

  return first === second ? last : first;
}
