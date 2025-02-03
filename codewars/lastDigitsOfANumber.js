function lastDigit(num, numDigits) {
  return numDigits > 0
    ? num.toString().slice(-numDigits).split("").map(Number)
    : [];
}
