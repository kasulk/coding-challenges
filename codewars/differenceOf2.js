function twosDifference(nums) {
  const sortedNums = [...nums].sort((a, b) => a - b);
  const pairs = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const first = sortedNums[i];
      const second = sortedNums[j];

      if (first + 2 === second) pairs.push([first, second]);
    }
  }

  return pairs;
}
