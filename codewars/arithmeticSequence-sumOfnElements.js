function ArithmeticSequenceSum(a, r, n) {
  let sum = 0;

  for (let i = 0; i < n; i++) {
    const currSum = a + r * i;
    sum += currSum;
  }

  return sum;
}
