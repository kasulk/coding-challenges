function getMissingElement(nums) {
  const sortedNums = [...nums].sort();

  for (let i = 0; i <= sortedNums.length; i++) {
    if (sortedNums[i] !== i) return i;
  }
}
