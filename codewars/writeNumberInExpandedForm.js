function expandedForm(num) {
  const digits = num.toString().split("");

  return digits
    .map((digit, i) =>
      digit === "0" ? null : digit.padEnd(digits.length - i, "0")
    )
    .filter((expDigit) => expDigit)
    .join(" + ");
}
