function evenOrOdd(strDigits) {
  let sumEvens = 0;
  let sumOdds = 0;

  strDigits.split("").forEach((strDigit) => {
    const digit = Number(strDigit);
    if (digit % 2 === 0) sumEvens += digit;
    else sumOdds += digit;
  });

  if (sumEvens > sumOdds) return "Even is greater than Odd";
  if (sumOdds > sumEvens) return "Odd is greater than Even";
  return "Even and Odd are the same";
}
