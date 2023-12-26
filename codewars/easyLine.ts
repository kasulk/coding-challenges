export function easyLine(n: number): number {
  // chatti

  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= n + i;
    result /= i;
  }

  return Math.round(Math.log(result));
}
