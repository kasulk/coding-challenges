export function nthFibo(n: number): number {
  const fibonacci = [0, 1];

  for (let i = 2; i < n; i++) {
    const last = fibonacci[i - 1];
    const secondLast = fibonacci[i - 2];

    fibonacci.push(last + secondLast);
  }

  return fibonacci[n - 1];
}
