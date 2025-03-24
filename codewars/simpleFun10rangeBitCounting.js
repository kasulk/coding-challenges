function rangeBitCount(a, b) {
  return Array(b - a + 1)
    .fill(0)
    .map((_, i) => (a + i).toString(2))
    .join("")
    .replaceAll("0", "").length;
}
