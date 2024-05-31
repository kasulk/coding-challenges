function expandedForm(num) {
  const [integer, decimals] = num.toString().split(".");
  return [...expandInteger(integer), ...expandDecimals(decimals)].join(" + ");
}

function expandInteger([...digits]) {
  return digits
    .map((digit, i, arr) =>
      digit === "0" ? null : digit.padEnd(arr.length - i, "0")
    )
    .filter((expDigit) => expDigit);
}

function expandDecimals([...digits]) {
  return digits
    .map((digit, i) => (digit === "0" ? null : `${digit}/1`.padEnd(i + 4, "0")))
    .filter((expDigit) => expDigit);
}
