export function collatz(num: number): number {
  const results: number[] = [num];

  while (num > 1) {
    if (num % 2 === 0) num /= 2;
    else num = num * 3 + 1;

    results.push(num);
  }

  return results.length;
}
