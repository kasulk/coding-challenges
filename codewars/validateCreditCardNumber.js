function validate(n) {
  const digits = n.toString().split("");
  const revDigits = digits
    .reverse()
    .map((digit, i) => (i % 2 === 0 ? Number(digit) : digit * 2))
    .map((digit) => (digit >= 10 ? digit - 9 : digit))
    .reduce((sum, digit) => sum + digit, 0);

  return revDigits % 10 === 0;
}
