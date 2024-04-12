export function squareDigitsSequence(num: number): number {
  const results = [num];

  while (true) {
    const curr = results[0];
    const squaredDigitsSum = sumUpSquaredDigits(curr);

    if (results.includes(squaredDigitsSum)) return results.length + 1;

    results.unshift(squaredDigitsSum);
  }
}

function digitize(num: number): number[] {
  return [...num.toString()].map(Number);
}

function sumUpSquaredDigits(num: number): number {
  return digitize(num).reduce((sum, digit) => sum + digit ** 2, 0);
}
