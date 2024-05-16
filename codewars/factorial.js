function factorial(n) {
  if (n < 0 || n > 12) throw new RangeError("prrrrrrrlt!");

  if (n < 1) return 1;
  return n * factorial(n - 1);
}
