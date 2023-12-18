export function singleDigit(n: number): number {
  let num = n;

  while (num > 9) {
    num = num
      .toString(2)
      .split("")
      .reduce((sum, binaryDigit) => sum + Number(binaryDigit), 0);
  }

  return num;
}
