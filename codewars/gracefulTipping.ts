export function gracefulTipping(bill: number): number {
  const billPlus15Percent = bill * 1.15;
  const numDigits = Math.trunc(billPlus15Percent).toString().length;
  const factor = 5 * 10 ** (numDigits - 2);

  return billPlus15Percent < 10
    ? Math.ceil(billPlus15Percent)
    : Math.ceil(billPlus15Percent / factor) * factor;
}
