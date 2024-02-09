export function tribonacci(
  nums: [number, number, number],
  n: number
): number[] {
  //
  const result = [...nums];

  while (result.length < n) {
    const sumLast3 = result.slice(-3).reduce((sum, num) => sum + num, 0);
    result.push(sumLast3);
  }

  return result.splice(0, n);
}
