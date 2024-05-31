function expandedForm(num) {
  const [integer, decimals] = num.toString().split(".");
  return [...expandInteger(integer), ...expandDecimals(decimals)].join(" + ");
}

function expandDecimals(strNum) {
  const digits = strNum.split("");
  return digits
    .map((digit, i) => (digit === "0" ? null : `${digit}/1`.padEnd(i + 4, "0")))
    .filter((expDigit) => expDigit);
}

function expandInteger(strNum) {
  const digits = strNum.split("");
  return digits
    .map((digit, i) =>
      digit === "0" ? null : digit.padEnd(digits.length - i, "0")
    )
    .filter((expDigit) => expDigit);
}
