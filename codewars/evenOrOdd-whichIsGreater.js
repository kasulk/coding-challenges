function evenOrOdd(strNums) {
  let sumEvens = 0;
  let sumOdds = 0;

  strNums.split("").forEach((strNum) => {
    const num = Number(strNum);
    num % 2 === 0 ? (sumEvens += num) : (sumOdds += num);
  });

  if (sumEvens > sumOdds) return "Even is greater than Odd";
  if (sumOdds > sumEvens) return "Odd is greater than Even";
  return "Even and Odd are the same";
}
