function sumDigPow(start, end) {
  const eurekas = [];

  for (let curr = start; curr < end; curr++) {
    const digits = curr.toString().split("");
    const currSum = digits.reduce((acc, curr, i) => acc + curr ** (i + 1), 0);

    if (curr === currSum) eurekas.push(curr);
  }

  return eurekas;
}
