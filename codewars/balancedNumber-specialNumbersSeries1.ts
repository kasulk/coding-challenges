export function balancedNum(number: number): string {
  // to get the length of each side without the middle
  /// divide the length of the number by 2
  /// round it up and subtract 1
  // calculate the sum for each side

  const numString = number.toString();

  if (numString.length <= 2) return "Balanced";

  const sideLength = Math.ceil(numString.length / 2) - 1;

  const leftSum = numString
    .slice(0, sideLength)
    .split("")
    .reduce((sum, num) => sum + Number(num), 0);

  const rightSum = numString
    .slice(-sideLength)
    .split("")
    .reduce((sum, num) => sum + Number(num), 0);

  return `${leftSum === rightSum ? "" : "Not "}Balanced`;
}
