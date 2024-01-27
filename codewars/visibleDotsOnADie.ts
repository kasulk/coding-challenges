export function totalAmountVisible(topNum: number, numSides: number): number {
  const allSidesSum = (numSides / 2) * (numSides + 1);
  const bottomNum = numSides + 1 - topNum;

  return allSidesSum - bottomNum;
}
