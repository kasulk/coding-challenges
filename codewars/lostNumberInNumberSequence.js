function findDeletedNumber(arr, mixArr) {
  const sortedMixArr = mixArr.slice().sort((a, b) => a - b);

  for (let i = 1; i <= arr.length; i++) {
    const curr = sortedMixArr[i - 1];
    if (curr !== i) return i;
  }

  return 0;
}
