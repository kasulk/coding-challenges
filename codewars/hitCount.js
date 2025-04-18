function counterEffect(hitCount) {
  return hitCount
    .split("")
    .map(Number)
    .map((digit) =>
      Array(digit + 1)
        .fill(0)
        .map((_, i) => i)
    );
}
