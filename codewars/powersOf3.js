function largestPower(n) {
  let result = -1;

  for (let i = 0; 3 ** i < n; i++) {
    if (3 ** i < n) result = i;
  }

  return result;
}
