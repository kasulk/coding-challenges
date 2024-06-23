function reverse(arr) {
  return arr.map((_, i) => arr[arr.length - 1 - i]);
}
