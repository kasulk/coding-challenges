function sumOfN(n) {
  const sequence = [];
  let sum = 0;

  for (let i = 0; i <= Math.abs(n); i++) {
    sum = n > 0 ? sum + i : sum - i;
    sequence.push(sum);
  }

  return sequence;
}
