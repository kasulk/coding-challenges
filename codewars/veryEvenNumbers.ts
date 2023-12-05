export function isVeryEvenNumber(n: number): boolean {
  let num = n;

  while (num > 9) {
    num = num
      .toString()
      .split("")
      .map(Number)
      .reduce((sum, digit) => sum + digit, 0);
  }

  return num % 2 === 0;
}
