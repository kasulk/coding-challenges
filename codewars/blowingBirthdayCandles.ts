export function blowCandles(str: string): number {
  let numBlows = 0;
  let num = BigInt(str);

  while (num) {
    const digits = num.toString().split("").map(Number);

    const newDigits = digits.map((digit, i) => {
      if (!digit) return 0;
      return i < 3 ? --digit : digit;
    });

    num = BigInt(newDigits.join(""));
    numBlows++;
  }

  return numBlows;
}
