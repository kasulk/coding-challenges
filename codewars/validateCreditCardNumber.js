function validate(num) {
  const digitsSum = num
    .toString()
    .split("")
    .reverse()
    .map((digit, i) => (i % 2 === 0 ? Number(digit) : digit * 2))
    .map((digit) => (digit >= 10 ? digit - 9 : digit))
    .reduce((sum, digit) => sum + digit, 0);

  return digitsSum % 10 === 0;
}
