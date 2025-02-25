function mergeArrays(arr, brr) {
  const maxLen = Math.max(arr.length, brr.length);
  const result = [];

  for (let i = 0; i < maxLen; i++) {
    if (arr[i]) result.push(arr[i]);
    if (brr[i]) result.push(brr[i]);
  }

  return result;
}
