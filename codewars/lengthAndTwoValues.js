function alternate(n, value1, value2) {
  return Array(n)
    .fill(null)
    .map((_, i) => (i % 2 === 0 ? value1 : value2));
}
