export function houseNumbersSum(houseNumbers: number[]): number {
  let sum = 0;

  for (let num of houseNumbers) {
    if (!num) return sum;
    sum += num;
  }

  return sum;
}
